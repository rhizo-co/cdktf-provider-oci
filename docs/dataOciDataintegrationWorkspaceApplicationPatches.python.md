# `dataOciDataintegrationWorkspaceApplicationPatches` Submodule <a name="`dataOciDataintegrationWorkspaceApplicationPatches` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataintegrationWorkspaceApplicationPatches <a name="DataOciDataintegrationWorkspaceApplicationPatches" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_patches oci_dataintegration_workspace_application_patches}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_application_patches

dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches(
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
  fields: typing.List[str] = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDataintegrationWorkspaceApplicationPatchesFilter]] = None,
  id: str = None,
  identifier: typing.List[str] = None,
  name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.Initializer.parameter.applicationKey">application_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_patches#application_key DataOciDataintegrationWorkspaceApplicationPatches#application_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.Initializer.parameter.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_patches#workspace_id DataOciDataintegrationWorkspaceApplicationPatches#workspace_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.Initializer.parameter.fields">fields</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_patches#fields DataOciDataintegrationWorkspaceApplicationPatches#fields}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilter">DataOciDataintegrationWorkspaceApplicationPatchesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_patches#id DataOciDataintegrationWorkspaceApplicationPatches#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.Initializer.parameter.identifier">identifier</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_patches#identifier DataOciDataintegrationWorkspaceApplicationPatches#identifier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_patches#name DataOciDataintegrationWorkspaceApplicationPatches#name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `application_key`<sup>Required</sup> <a name="application_key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.Initializer.parameter.applicationKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_patches#application_key DataOciDataintegrationWorkspaceApplicationPatches#application_key}.

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.Initializer.parameter.workspaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_patches#workspace_id DataOciDataintegrationWorkspaceApplicationPatches#workspace_id}.

---

##### `fields`<sup>Optional</sup> <a name="fields" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.Initializer.parameter.fields"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_patches#fields DataOciDataintegrationWorkspaceApplicationPatches#fields}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilter">DataOciDataintegrationWorkspaceApplicationPatchesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_patches#filter DataOciDataintegrationWorkspaceApplicationPatches#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_patches#id DataOciDataintegrationWorkspaceApplicationPatches#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identifier`<sup>Optional</sup> <a name="identifier" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.Initializer.parameter.identifier"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_patches#identifier DataOciDataintegrationWorkspaceApplicationPatches#identifier}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_patches#name DataOciDataintegrationWorkspaceApplicationPatches#name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.resetFields">reset_fields</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.resetIdentifier">reset_identifier</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.resetName">reset_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDataintegrationWorkspaceApplicationPatchesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilter">DataOciDataintegrationWorkspaceApplicationPatchesFilter</a>]]

---

##### `reset_fields` <a name="reset_fields" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.resetFields"></a>

```python
def reset_fields() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_identifier` <a name="reset_identifier" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.resetIdentifier"></a>

```python
def reset_identifier() -> None
```

##### `reset_name` <a name="reset_name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.resetName"></a>

```python
def reset_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDataintegrationWorkspaceApplicationPatches resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_application_patches

dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_application_patches

dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_application_patches

dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_application_patches

dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDataintegrationWorkspaceApplicationPatches resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDataintegrationWorkspaceApplicationPatches to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDataintegrationWorkspaceApplicationPatches that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_patches#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataintegrationWorkspaceApplicationPatches to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterList">DataOciDataintegrationWorkspaceApplicationPatchesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.patchSummaryCollection">patch_summary_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionList">DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.applicationKeyInput">application_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.fieldsInput">fields_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilter">DataOciDataintegrationWorkspaceApplicationPatchesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.identifierInput">identifier_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.workspaceIdInput">workspace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.applicationKey">application_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.fields">fields</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.identifier">identifier</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.filter"></a>

```python
filter: DataOciDataintegrationWorkspaceApplicationPatchesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterList">DataOciDataintegrationWorkspaceApplicationPatchesFilterList</a>

---

##### `patch_summary_collection`<sup>Required</sup> <a name="patch_summary_collection" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.patchSummaryCollection"></a>

```python
patch_summary_collection: DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionList">DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionList</a>

---

##### `application_key_input`<sup>Optional</sup> <a name="application_key_input" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.applicationKeyInput"></a>

```python
application_key_input: str
```

- *Type:* str

---

##### `fields_input`<sup>Optional</sup> <a name="fields_input" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.fieldsInput"></a>

```python
fields_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDataintegrationWorkspaceApplicationPatchesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilter">DataOciDataintegrationWorkspaceApplicationPatchesFilter</a>]]

---

##### `identifier_input`<sup>Optional</sup> <a name="identifier_input" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.identifierInput"></a>

```python
identifier_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `workspace_id_input`<sup>Optional</sup> <a name="workspace_id_input" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.workspaceIdInput"></a>

```python
workspace_id_input: str
```

- *Type:* str

---

##### `application_key`<sup>Required</sup> <a name="application_key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.applicationKey"></a>

```python
application_key: str
```

- *Type:* str

---

##### `fields`<sup>Required</sup> <a name="fields" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.fields"></a>

```python
fields: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.identifier"></a>

```python
identifier: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataintegrationWorkspaceApplicationPatchesConfig <a name="DataOciDataintegrationWorkspaceApplicationPatchesConfig" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_application_patches

dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  application_key: str,
  workspace_id: str,
  fields: typing.List[str] = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDataintegrationWorkspaceApplicationPatchesFilter]] = None,
  id: str = None,
  identifier: typing.List[str] = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesConfig.property.applicationKey">application_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_patches#application_key DataOciDataintegrationWorkspaceApplicationPatches#application_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesConfig.property.workspaceId">workspace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_patches#workspace_id DataOciDataintegrationWorkspaceApplicationPatches#workspace_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesConfig.property.fields">fields</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_patches#fields DataOciDataintegrationWorkspaceApplicationPatches#fields}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilter">DataOciDataintegrationWorkspaceApplicationPatchesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_patches#id DataOciDataintegrationWorkspaceApplicationPatches#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesConfig.property.identifier">identifier</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_patches#identifier DataOciDataintegrationWorkspaceApplicationPatches#identifier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_patches#name DataOciDataintegrationWorkspaceApplicationPatches#name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `application_key`<sup>Required</sup> <a name="application_key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesConfig.property.applicationKey"></a>

```python
application_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_patches#application_key DataOciDataintegrationWorkspaceApplicationPatches#application_key}.

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesConfig.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_patches#workspace_id DataOciDataintegrationWorkspaceApplicationPatches#workspace_id}.

---

##### `fields`<sup>Optional</sup> <a name="fields" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesConfig.property.fields"></a>

```python
fields: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_patches#fields DataOciDataintegrationWorkspaceApplicationPatches#fields}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDataintegrationWorkspaceApplicationPatchesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilter">DataOciDataintegrationWorkspaceApplicationPatchesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_patches#filter DataOciDataintegrationWorkspaceApplicationPatches#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_patches#id DataOciDataintegrationWorkspaceApplicationPatches#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identifier`<sup>Optional</sup> <a name="identifier" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesConfig.property.identifier"></a>

```python
identifier: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_patches#identifier DataOciDataintegrationWorkspaceApplicationPatches#identifier}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_patches#name DataOciDataintegrationWorkspaceApplicationPatches#name}.

---

### DataOciDataintegrationWorkspaceApplicationPatchesFilter <a name="DataOciDataintegrationWorkspaceApplicationPatchesFilter" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_application_patches

dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_patches#name DataOciDataintegrationWorkspaceApplicationPatches#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_patches#values DataOciDataintegrationWorkspaceApplicationPatches#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_patches#regex DataOciDataintegrationWorkspaceApplicationPatches#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_patches#name DataOciDataintegrationWorkspaceApplicationPatches#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_patches#values DataOciDataintegrationWorkspaceApplicationPatches#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_patches#regex DataOciDataintegrationWorkspaceApplicationPatches#regex}.

---

### DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollection <a name="DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_application_patches

dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollection()
```


### DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItems <a name="DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_application_patches

dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItems()
```


### DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadata <a name="DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadata"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadata.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_application_patches

dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadata()
```


### DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadata <a name="DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadata"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadata.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_application_patches

dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadata()
```


### DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregator <a name="DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregator" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregator"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregator.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_application_patches

dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregator()
```


### DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatistics <a name="DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatistics" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatistics"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatistics.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_application_patches

dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatistics()
```


### DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct <a name="DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_application_patches

dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct()
```


### DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRef <a name="DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRef" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRef"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRef.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_application_patches

dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRef()
```


### DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadata <a name="DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadata"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadata.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_application_patches

dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadata()
```


### DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadata <a name="DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadata"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadata.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_application_patches

dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadata()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataintegrationWorkspaceApplicationPatchesFilterList <a name="DataOciDataintegrationWorkspaceApplicationPatchesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_application_patches

dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilter">DataOciDataintegrationWorkspaceApplicationPatchesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDataintegrationWorkspaceApplicationPatchesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilter">DataOciDataintegrationWorkspaceApplicationPatchesFilter</a>]]

---


### DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference <a name="DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_application_patches

dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilter">DataOciDataintegrationWorkspaceApplicationPatchesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDataintegrationWorkspaceApplicationPatchesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilter">DataOciDataintegrationWorkspaceApplicationPatchesFilter</a>]

---


### DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataList <a name="DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_application_patches

dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference <a name="DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_application_patches

dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.property.identifier">identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.property.namePath">name_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.property.objectVersion">object_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadata">DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `name_path`<sup>Required</sup> <a name="name_path" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.property.namePath"></a>

```python
name_path: str
```

- *Type:* str

---

##### `object_version`<sup>Required</sup> <a name="object_version" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.property.objectVersion"></a>

```python
object_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadata
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadata">DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadata</a>

---


### DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsList <a name="DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_application_patches

dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorList <a name="DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_application_patches

dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference <a name="DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_application_patches

dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.property.identifier">identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregator">DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregator</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregator
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregator">DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregator</a>

---


### DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsList <a name="DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_application_patches

dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList <a name="DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_application_patches

dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference <a name="DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_application_patches

dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.objectCount">object_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.objectType">object_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct">DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `object_count`<sup>Required</sup> <a name="object_count" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.objectCount"></a>

```python
object_count: str
```

- *Type:* str

---

##### `object_type`<sup>Required</sup> <a name="object_type" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.objectType"></a>

```python
object_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct">DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct</a>

---


### DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference <a name="DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_application_patches

dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.property.objectTypeCountList">object_type_count_list</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList">DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatistics">DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatistics</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `object_type_count_list`<sup>Required</sup> <a name="object_type_count_list" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.property.objectTypeCountList"></a>

```python
object_type_count_list: DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList">DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatistics
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatistics">DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatistics</a>

---


### DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataList <a name="DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_application_patches

dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference <a name="DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_application_patches

dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.property.aggregator">aggregator</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorList">DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.property.aggregatorKey">aggregator_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.property.countStatistics">count_statistics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsList">DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.property.createdByName">created_by_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.property.identifierPath">identifier_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.property.infoFields">info_fields</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.property.isFavorite">is_favorite</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.property.labels">labels</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.property.registryVersion">registry_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.property.updatedBy">updated_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.property.updatedByName">updated_by_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadata">DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aggregator`<sup>Required</sup> <a name="aggregator" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.property.aggregator"></a>

```python
aggregator: DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorList">DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorList</a>

---

##### `aggregator_key`<sup>Required</sup> <a name="aggregator_key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.property.aggregatorKey"></a>

```python
aggregator_key: str
```

- *Type:* str

---

##### `count_statistics`<sup>Required</sup> <a name="count_statistics" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.property.countStatistics"></a>

```python
count_statistics: DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsList">DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsList</a>

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `created_by_name`<sup>Required</sup> <a name="created_by_name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.property.createdByName"></a>

```python
created_by_name: str
```

- *Type:* str

---

##### `identifier_path`<sup>Required</sup> <a name="identifier_path" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.property.identifierPath"></a>

```python
identifier_path: str
```

- *Type:* str

---

##### `info_fields`<sup>Required</sup> <a name="info_fields" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.property.infoFields"></a>

```python
info_fields: StringMap
```

- *Type:* cdktf.StringMap

---

##### `is_favorite`<sup>Required</sup> <a name="is_favorite" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.property.isFavorite"></a>

```python
is_favorite: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `labels`<sup>Required</sup> <a name="labels" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.property.labels"></a>

```python
labels: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `registry_version`<sup>Required</sup> <a name="registry_version" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.property.registryVersion"></a>

```python
registry_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `updated_by`<sup>Required</sup> <a name="updated_by" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.property.updatedBy"></a>

```python
updated_by: str
```

- *Type:* str

---

##### `updated_by_name`<sup>Required</sup> <a name="updated_by_name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.property.updatedByName"></a>

```python
updated_by_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadata
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadata">DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadata</a>

---


### DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference <a name="DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_application_patches

dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.property.applicationKey">application_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.property.applicationVersion">application_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.property.dependentObjectMetadata">dependent_object_metadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataList">DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.property.errorMessages">error_messages</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.property.identifier">identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.property.keyMap">key_map</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.property.metadata">metadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataList">DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.property.modelType">model_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.property.modelVersion">model_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.property.objectKeys">object_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.property.objectStatus">object_status</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.property.objectVersion">object_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.property.parentRef">parent_ref</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefList">DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.property.patchObjectMetadata">patch_object_metadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataList">DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.property.patchStatus">patch_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.property.patchType">patch_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.property.registryMetadata">registry_metadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataList">DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.property.timePatched">time_patched</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.property.workspaceId">workspace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItems">DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `application_key`<sup>Required</sup> <a name="application_key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.property.applicationKey"></a>

```python
application_key: str
```

- *Type:* str

---

##### `application_version`<sup>Required</sup> <a name="application_version" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.property.applicationVersion"></a>

```python
application_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dependent_object_metadata`<sup>Required</sup> <a name="dependent_object_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.property.dependentObjectMetadata"></a>

```python
dependent_object_metadata: DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataList">DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataList</a>

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `error_messages`<sup>Required</sup> <a name="error_messages" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.property.errorMessages"></a>

```python
error_messages: StringMap
```

- *Type:* cdktf.StringMap

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `key_map`<sup>Required</sup> <a name="key_map" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.property.keyMap"></a>

```python
key_map: StringMap
```

- *Type:* cdktf.StringMap

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.property.metadata"></a>

```python
metadata: DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataList">DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataList</a>

---

##### `model_type`<sup>Required</sup> <a name="model_type" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.property.modelType"></a>

```python
model_type: str
```

- *Type:* str

---

##### `model_version`<sup>Required</sup> <a name="model_version" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.property.modelVersion"></a>

```python
model_version: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `object_keys`<sup>Required</sup> <a name="object_keys" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.property.objectKeys"></a>

```python
object_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `object_status`<sup>Required</sup> <a name="object_status" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.property.objectStatus"></a>

```python
object_status: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `object_version`<sup>Required</sup> <a name="object_version" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.property.objectVersion"></a>

```python
object_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `parent_ref`<sup>Required</sup> <a name="parent_ref" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.property.parentRef"></a>

```python
parent_ref: DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefList">DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefList</a>

---

##### `patch_object_metadata`<sup>Required</sup> <a name="patch_object_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.property.patchObjectMetadata"></a>

```python
patch_object_metadata: DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataList">DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataList</a>

---

##### `patch_status`<sup>Required</sup> <a name="patch_status" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.property.patchStatus"></a>

```python
patch_status: str
```

- *Type:* str

---

##### `patch_type`<sup>Required</sup> <a name="patch_type" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.property.patchType"></a>

```python
patch_type: str
```

- *Type:* str

---

##### `registry_metadata`<sup>Required</sup> <a name="registry_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.property.registryMetadata"></a>

```python
registry_metadata: DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataList">DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataList</a>

---

##### `time_patched`<sup>Required</sup> <a name="time_patched" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.property.timePatched"></a>

```python
time_patched: str
```

- *Type:* str

---

##### `workspace_id`<sup>Required</sup> <a name="workspace_id" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.property.workspaceId"></a>

```python
workspace_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItems">DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItems</a>

---


### DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefList <a name="DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_application_patches

dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference <a name="DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_application_patches

dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.property.parent">parent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.property.rootDocId">root_doc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRef">DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRef</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `parent`<sup>Required</sup> <a name="parent" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

##### `root_doc_id`<sup>Required</sup> <a name="root_doc_id" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.property.rootDocId"></a>

```python
root_doc_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRef
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRef">DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRef</a>

---


### DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataList <a name="DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_application_patches

dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference <a name="DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_application_patches

dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.property.identifier">identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.property.namePath">name_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.property.objectVersion">object_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadata">DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `name_path`<sup>Required</sup> <a name="name_path" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.property.namePath"></a>

```python
name_path: str
```

- *Type:* str

---

##### `object_version`<sup>Required</sup> <a name="object_version" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.property.objectVersion"></a>

```python
object_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadata
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadata">DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadata</a>

---


### DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataList <a name="DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_application_patches

dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference <a name="DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_application_patches

dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.property.aggregatorKey">aggregator_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.property.isFavorite">is_favorite</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.property.labels">labels</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.property.registryVersion">registry_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadata">DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aggregator_key`<sup>Required</sup> <a name="aggregator_key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.property.aggregatorKey"></a>

```python
aggregator_key: str
```

- *Type:* str

---

##### `is_favorite`<sup>Required</sup> <a name="is_favorite" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.property.isFavorite"></a>

```python
is_favorite: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.property.labels"></a>

```python
labels: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `registry_version`<sup>Required</sup> <a name="registry_version" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.property.registryVersion"></a>

```python
registry_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadata
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadata">DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadata</a>

---


### DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionList <a name="DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_application_patches

dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference <a name="DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_dataintegration_workspace_application_patches

dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsList">DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollection">DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.property.items"></a>

```python
items: DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsList">DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollection">DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollection</a>

---



