# `dataOciOsManagementHubManagedInstanceGroupModules` Submodule <a name="`dataOciOsManagementHubManagedInstanceGroupModules` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsManagementHubManagedInstanceGroupModules <a name="DataOciOsManagementHubManagedInstanceGroupModules" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_modules oci_os_management_hub_managed_instance_group_modules}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_group_modules

dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  managed_instance_group_id: str,
  compartment_id: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciOsManagementHubManagedInstanceGroupModulesFilter]] = None,
  id: str = None,
  name: str = None,
  name_contains: str = None,
  stream_name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.Initializer.parameter.managedInstanceGroupId">managed_instance_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_modules#managed_instance_group_id DataOciOsManagementHubManagedInstanceGroupModules#managed_instance_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_modules#compartment_id DataOciOsManagementHubManagedInstanceGroupModules#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilter">DataOciOsManagementHubManagedInstanceGroupModulesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_modules#id DataOciOsManagementHubManagedInstanceGroupModules#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_modules#name DataOciOsManagementHubManagedInstanceGroupModules#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.Initializer.parameter.nameContains">name_contains</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_modules#name_contains DataOciOsManagementHubManagedInstanceGroupModules#name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.Initializer.parameter.streamName">stream_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_modules#stream_name DataOciOsManagementHubManagedInstanceGroupModules#stream_name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `managed_instance_group_id`<sup>Required</sup> <a name="managed_instance_group_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.Initializer.parameter.managedInstanceGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_modules#managed_instance_group_id DataOciOsManagementHubManagedInstanceGroupModules#managed_instance_group_id}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_modules#compartment_id DataOciOsManagementHubManagedInstanceGroupModules#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilter">DataOciOsManagementHubManagedInstanceGroupModulesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_modules#filter DataOciOsManagementHubManagedInstanceGroupModules#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_modules#id DataOciOsManagementHubManagedInstanceGroupModules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_modules#name DataOciOsManagementHubManagedInstanceGroupModules#name}.

---

##### `name_contains`<sup>Optional</sup> <a name="name_contains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.Initializer.parameter.nameContains"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_modules#name_contains DataOciOsManagementHubManagedInstanceGroupModules#name_contains}.

---

##### `stream_name`<sup>Optional</sup> <a name="stream_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.Initializer.parameter.streamName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_modules#stream_name DataOciOsManagementHubManagedInstanceGroupModules#stream_name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.resetNameContains">reset_name_contains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.resetStreamName">reset_stream_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciOsManagementHubManagedInstanceGroupModulesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilter">DataOciOsManagementHubManagedInstanceGroupModulesFilter</a>]]

---

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_name_contains` <a name="reset_name_contains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.resetNameContains"></a>

```python
def reset_name_contains() -> None
```

##### `reset_stream_name` <a name="reset_stream_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.resetStreamName"></a>

```python
def reset_stream_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciOsManagementHubManagedInstanceGroupModules resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_group_modules

dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_group_modules

dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_group_modules

dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_group_modules

dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciOsManagementHubManagedInstanceGroupModules resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciOsManagementHubManagedInstanceGroupModules to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciOsManagementHubManagedInstanceGroupModules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_modules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsManagementHubManagedInstanceGroupModules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilterList">DataOciOsManagementHubManagedInstanceGroupModulesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.property.managedInstanceGroupModuleCollection">managed_instance_group_module_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionList">DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilter">DataOciOsManagementHubManagedInstanceGroupModulesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.property.managedInstanceGroupIdInput">managed_instance_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.property.nameContainsInput">name_contains_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.property.streamNameInput">stream_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.property.managedInstanceGroupId">managed_instance_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.property.nameContains">name_contains</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.property.streamName">stream_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.property.filter"></a>

```python
filter: DataOciOsManagementHubManagedInstanceGroupModulesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilterList">DataOciOsManagementHubManagedInstanceGroupModulesFilterList</a>

---

##### `managed_instance_group_module_collection`<sup>Required</sup> <a name="managed_instance_group_module_collection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.property.managedInstanceGroupModuleCollection"></a>

```python
managed_instance_group_module_collection: DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionList">DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciOsManagementHubManagedInstanceGroupModulesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilter">DataOciOsManagementHubManagedInstanceGroupModulesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `managed_instance_group_id_input`<sup>Optional</sup> <a name="managed_instance_group_id_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.property.managedInstanceGroupIdInput"></a>

```python
managed_instance_group_id_input: str
```

- *Type:* str

---

##### `name_contains_input`<sup>Optional</sup> <a name="name_contains_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.property.nameContainsInput"></a>

```python
name_contains_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `stream_name_input`<sup>Optional</sup> <a name="stream_name_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.property.streamNameInput"></a>

```python
stream_name_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `managed_instance_group_id`<sup>Required</sup> <a name="managed_instance_group_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.property.managedInstanceGroupId"></a>

```python
managed_instance_group_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `name_contains`<sup>Required</sup> <a name="name_contains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.property.nameContains"></a>

```python
name_contains: str
```

- *Type:* str

---

##### `stream_name`<sup>Required</sup> <a name="stream_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.property.streamName"></a>

```python
stream_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModules.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsManagementHubManagedInstanceGroupModulesConfig <a name="DataOciOsManagementHubManagedInstanceGroupModulesConfig" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_group_modules

dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  managed_instance_group_id: str,
  compartment_id: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciOsManagementHubManagedInstanceGroupModulesFilter]] = None,
  id: str = None,
  name: str = None,
  name_contains: str = None,
  stream_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesConfig.property.managedInstanceGroupId">managed_instance_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_modules#managed_instance_group_id DataOciOsManagementHubManagedInstanceGroupModules#managed_instance_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_modules#compartment_id DataOciOsManagementHubManagedInstanceGroupModules#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilter">DataOciOsManagementHubManagedInstanceGroupModulesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_modules#id DataOciOsManagementHubManagedInstanceGroupModules#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_modules#name DataOciOsManagementHubManagedInstanceGroupModules#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesConfig.property.nameContains">name_contains</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_modules#name_contains DataOciOsManagementHubManagedInstanceGroupModules#name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesConfig.property.streamName">stream_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_modules#stream_name DataOciOsManagementHubManagedInstanceGroupModules#stream_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `managed_instance_group_id`<sup>Required</sup> <a name="managed_instance_group_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesConfig.property.managedInstanceGroupId"></a>

```python
managed_instance_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_modules#managed_instance_group_id DataOciOsManagementHubManagedInstanceGroupModules#managed_instance_group_id}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_modules#compartment_id DataOciOsManagementHubManagedInstanceGroupModules#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciOsManagementHubManagedInstanceGroupModulesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilter">DataOciOsManagementHubManagedInstanceGroupModulesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_modules#filter DataOciOsManagementHubManagedInstanceGroupModules#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_modules#id DataOciOsManagementHubManagedInstanceGroupModules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_modules#name DataOciOsManagementHubManagedInstanceGroupModules#name}.

---

##### `name_contains`<sup>Optional</sup> <a name="name_contains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesConfig.property.nameContains"></a>

```python
name_contains: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_modules#name_contains DataOciOsManagementHubManagedInstanceGroupModules#name_contains}.

---

##### `stream_name`<sup>Optional</sup> <a name="stream_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesConfig.property.streamName"></a>

```python
stream_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_modules#stream_name DataOciOsManagementHubManagedInstanceGroupModules#stream_name}.

---

### DataOciOsManagementHubManagedInstanceGroupModulesFilter <a name="DataOciOsManagementHubManagedInstanceGroupModulesFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_group_modules

dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_modules#name DataOciOsManagementHubManagedInstanceGroupModules#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_modules#values DataOciOsManagementHubManagedInstanceGroupModules#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_modules#regex DataOciOsManagementHubManagedInstanceGroupModules#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_modules#name DataOciOsManagementHubManagedInstanceGroupModules#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_modules#values DataOciOsManagementHubManagedInstanceGroupModules#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_group_modules#regex DataOciOsManagementHubManagedInstanceGroupModules#regex}.

---

### DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollection <a name="DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_group_modules

dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollection()
```


### DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItems <a name="DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_group_modules

dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItems()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOsManagementHubManagedInstanceGroupModulesFilterList <a name="DataOciOsManagementHubManagedInstanceGroupModulesFilterList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_group_modules

dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsManagementHubManagedInstanceGroupModulesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilter">DataOciOsManagementHubManagedInstanceGroupModulesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciOsManagementHubManagedInstanceGroupModulesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilter">DataOciOsManagementHubManagedInstanceGroupModulesFilter</a>]]

---


### DataOciOsManagementHubManagedInstanceGroupModulesFilterOutputReference <a name="DataOciOsManagementHubManagedInstanceGroupModulesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_group_modules

dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilter">DataOciOsManagementHubManagedInstanceGroupModulesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciOsManagementHubManagedInstanceGroupModulesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesFilter">DataOciOsManagementHubManagedInstanceGroupModulesFilter</a>]

---


### DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItemsList <a name="DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_group_modules

dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItemsOutputReference <a name="DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_group_modules

dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItemsOutputReference.property.enabledStream">enabled_stream</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItemsOutputReference.property.installedProfiles">installed_profiles</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItemsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItemsOutputReference.property.softwareSourceId">software_source_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItems">DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_stream`<sup>Required</sup> <a name="enabled_stream" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItemsOutputReference.property.enabledStream"></a>

```python
enabled_stream: str
```

- *Type:* str

---

##### `installed_profiles`<sup>Required</sup> <a name="installed_profiles" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItemsOutputReference.property.installedProfiles"></a>

```python
installed_profiles: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItemsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `software_source_id`<sup>Required</sup> <a name="software_source_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItemsOutputReference.property.softwareSourceId"></a>

```python
software_source_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItems">DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItems</a>

---


### DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionList <a name="DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_group_modules

dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionOutputReference <a name="DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_managed_instance_group_modules

dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItemsList">DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollection">DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionOutputReference.property.items"></a>

```python
items: DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItemsList">DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceGroupModules.DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollection">DataOciOsManagementHubManagedInstanceGroupModulesManagedInstanceGroupModuleCollection</a>

---



