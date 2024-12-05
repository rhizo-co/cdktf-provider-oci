# `dataOciOsManagementHubSoftwareSourceSoftwarePackages` Submodule <a name="`dataOciOsManagementHubSoftwareSourceSoftwarePackages` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsManagementHubSoftwareSourceSoftwarePackages <a name="DataOciOsManagementHubSoftwareSourceSoftwarePackages" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_software_packages oci_os_management_hub_software_source_software_packages}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source_software_packages

dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  software_source_id: str,
  display_name: str = None,
  display_name_contains: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilter]] = None,
  id: str = None,
  is_latest: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.Initializer.parameter.softwareSourceId">software_source_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_software_packages#software_source_id DataOciOsManagementHubSoftwareSourceSoftwarePackages#software_source_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_software_packages#display_name DataOciOsManagementHubSoftwareSourceSoftwarePackages#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.Initializer.parameter.displayNameContains">display_name_contains</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_software_packages#display_name_contains DataOciOsManagementHubSoftwareSourceSoftwarePackages#display_name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilter">DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_software_packages#id DataOciOsManagementHubSoftwareSourceSoftwarePackages#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.Initializer.parameter.isLatest">is_latest</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_software_packages#is_latest DataOciOsManagementHubSoftwareSourceSoftwarePackages#is_latest}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `software_source_id`<sup>Required</sup> <a name="software_source_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.Initializer.parameter.softwareSourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_software_packages#software_source_id DataOciOsManagementHubSoftwareSourceSoftwarePackages#software_source_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_software_packages#display_name DataOciOsManagementHubSoftwareSourceSoftwarePackages#display_name}.

---

##### `display_name_contains`<sup>Optional</sup> <a name="display_name_contains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.Initializer.parameter.displayNameContains"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_software_packages#display_name_contains DataOciOsManagementHubSoftwareSourceSoftwarePackages#display_name_contains}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilter">DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_software_packages#filter DataOciOsManagementHubSoftwareSourceSoftwarePackages#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_software_packages#id DataOciOsManagementHubSoftwareSourceSoftwarePackages#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_latest`<sup>Optional</sup> <a name="is_latest" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.Initializer.parameter.isLatest"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_software_packages#is_latest DataOciOsManagementHubSoftwareSourceSoftwarePackages#is_latest}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.resetDisplayNameContains">reset_display_name_contains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.resetIsLatest">reset_is_latest</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilter">DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilter</a>]]

---

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_display_name_contains` <a name="reset_display_name_contains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.resetDisplayNameContains"></a>

```python
def reset_display_name_contains() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_latest` <a name="reset_is_latest" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.resetIsLatest"></a>

```python
def reset_is_latest() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciOsManagementHubSoftwareSourceSoftwarePackages resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source_software_packages

dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source_software_packages

dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source_software_packages

dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source_software_packages

dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciOsManagementHubSoftwareSourceSoftwarePackages resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciOsManagementHubSoftwareSourceSoftwarePackages to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciOsManagementHubSoftwareSourceSoftwarePackages that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_software_packages#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsManagementHubSoftwareSourceSoftwarePackages to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterList">DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.softwarePackageCollection">software_package_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionList">DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.displayNameContainsInput">display_name_contains_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilter">DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.isLatestInput">is_latest_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.softwareSourceIdInput">software_source_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.displayNameContains">display_name_contains</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.isLatest">is_latest</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.softwareSourceId">software_source_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.filter"></a>

```python
filter: DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterList">DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterList</a>

---

##### `software_package_collection`<sup>Required</sup> <a name="software_package_collection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.softwarePackageCollection"></a>

```python
software_package_collection: DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionList">DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionList</a>

---

##### `display_name_contains_input`<sup>Optional</sup> <a name="display_name_contains_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.displayNameContainsInput"></a>

```python
display_name_contains_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilter">DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_latest_input`<sup>Optional</sup> <a name="is_latest_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.isLatestInput"></a>

```python
is_latest_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `software_source_id_input`<sup>Optional</sup> <a name="software_source_id_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.softwareSourceIdInput"></a>

```python
software_source_id_input: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `display_name_contains`<sup>Required</sup> <a name="display_name_contains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.displayNameContains"></a>

```python
display_name_contains: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_latest`<sup>Required</sup> <a name="is_latest" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.isLatest"></a>

```python
is_latest: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `software_source_id`<sup>Required</sup> <a name="software_source_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.softwareSourceId"></a>

```python
software_source_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsManagementHubSoftwareSourceSoftwarePackagesConfig <a name="DataOciOsManagementHubSoftwareSourceSoftwarePackagesConfig" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source_software_packages

dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  software_source_id: str,
  display_name: str = None,
  display_name_contains: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilter]] = None,
  id: str = None,
  is_latest: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesConfig.property.softwareSourceId">software_source_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_software_packages#software_source_id DataOciOsManagementHubSoftwareSourceSoftwarePackages#software_source_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_software_packages#display_name DataOciOsManagementHubSoftwareSourceSoftwarePackages#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesConfig.property.displayNameContains">display_name_contains</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_software_packages#display_name_contains DataOciOsManagementHubSoftwareSourceSoftwarePackages#display_name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilter">DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_software_packages#id DataOciOsManagementHubSoftwareSourceSoftwarePackages#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesConfig.property.isLatest">is_latest</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_software_packages#is_latest DataOciOsManagementHubSoftwareSourceSoftwarePackages#is_latest}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `software_source_id`<sup>Required</sup> <a name="software_source_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesConfig.property.softwareSourceId"></a>

```python
software_source_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_software_packages#software_source_id DataOciOsManagementHubSoftwareSourceSoftwarePackages#software_source_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_software_packages#display_name DataOciOsManagementHubSoftwareSourceSoftwarePackages#display_name}.

---

##### `display_name_contains`<sup>Optional</sup> <a name="display_name_contains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesConfig.property.displayNameContains"></a>

```python
display_name_contains: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_software_packages#display_name_contains DataOciOsManagementHubSoftwareSourceSoftwarePackages#display_name_contains}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilter">DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_software_packages#filter DataOciOsManagementHubSoftwareSourceSoftwarePackages#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_software_packages#id DataOciOsManagementHubSoftwareSourceSoftwarePackages#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_latest`<sup>Optional</sup> <a name="is_latest" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesConfig.property.isLatest"></a>

```python
is_latest: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_software_packages#is_latest DataOciOsManagementHubSoftwareSourceSoftwarePackages#is_latest}.

---

### DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilter <a name="DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source_software_packages

dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_software_packages#name DataOciOsManagementHubSoftwareSourceSoftwarePackages#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_software_packages#values DataOciOsManagementHubSoftwareSourceSoftwarePackages#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_software_packages#regex DataOciOsManagementHubSoftwareSourceSoftwarePackages#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_software_packages#name DataOciOsManagementHubSoftwareSourceSoftwarePackages#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_software_packages#values DataOciOsManagementHubSoftwareSourceSoftwarePackages#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_software_packages#regex DataOciOsManagementHubSoftwareSourceSoftwarePackages#regex}.

---

### DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollection <a name="DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source_software_packages

dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollection()
```


### DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItems <a name="DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source_software_packages

dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItems()
```


### DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependencies <a name="DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependencies" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependencies"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependencies.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source_software_packages

dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependencies()
```


### DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFiles <a name="DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFiles" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFiles"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFiles.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source_software_packages

dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFiles()
```


### DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSources <a name="DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSources" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSources.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source_software_packages

dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSources()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterList <a name="DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source_software_packages

dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilter">DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilter">DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilter</a>]]

---


### DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference <a name="DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source_software_packages

dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilter">DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilter">DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilter</a>]

---


### DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList <a name="DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source_software_packages

dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference <a name="DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source_software_packages

dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.property.dependency">dependency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.property.dependencyModifier">dependency_modifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.property.dependencyType">dependency_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependencies">DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependencies</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dependency`<sup>Required</sup> <a name="dependency" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.property.dependency"></a>

```python
dependency: str
```

- *Type:* str

---

##### `dependency_modifier`<sup>Required</sup> <a name="dependency_modifier" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.property.dependencyModifier"></a>

```python
dependency_modifier: str
```

- *Type:* str

---

##### `dependency_type`<sup>Required</sup> <a name="dependency_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.property.dependencyType"></a>

```python
dependency_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependencies
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependencies">DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependencies</a>

---


### DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesList <a name="DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source_software_packages

dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference <a name="DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source_software_packages

dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.property.checksum">checksum</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.property.checksumType">checksum_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.property.sizeInBytes">size_in_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.property.timeModified">time_modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFiles">DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFiles</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `checksum`<sup>Required</sup> <a name="checksum" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.property.checksum"></a>

```python
checksum: str
```

- *Type:* str

---

##### `checksum_type`<sup>Required</sup> <a name="checksum_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.property.checksumType"></a>

```python
checksum_type: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `size_in_bytes`<sup>Required</sup> <a name="size_in_bytes" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.property.sizeInBytes"></a>

```python
size_in_bytes: str
```

- *Type:* str

---

##### `time_modified`<sup>Required</sup> <a name="time_modified" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.property.timeModified"></a>

```python
time_modified: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFiles
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFiles">DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFiles</a>

---


### DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsList <a name="DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source_software_packages

dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference <a name="DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source_software_packages

dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.architecture">architecture</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.checksum">checksum</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.checksumType">checksum_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.dependencies">dependencies</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList">DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.files">files</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesList">DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.isLatest">is_latest</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.lastModifiedDate">last_modified_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.osFamilies">os_families</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.sizeInBytes">size_in_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.softwareSources">software_sources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList">DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItems">DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.architecture"></a>

```python
architecture: str
```

- *Type:* str

---

##### `checksum`<sup>Required</sup> <a name="checksum" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.checksum"></a>

```python
checksum: str
```

- *Type:* str

---

##### `checksum_type`<sup>Required</sup> <a name="checksum_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.checksumType"></a>

```python
checksum_type: str
```

- *Type:* str

---

##### `dependencies`<sup>Required</sup> <a name="dependencies" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.dependencies"></a>

```python
dependencies: DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList">DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList</a>

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `files`<sup>Required</sup> <a name="files" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.files"></a>

```python
files: DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesList">DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesList</a>

---

##### `is_latest`<sup>Required</sup> <a name="is_latest" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.isLatest"></a>

```python
is_latest: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `last_modified_date`<sup>Required</sup> <a name="last_modified_date" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.lastModifiedDate"></a>

```python
last_modified_date: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `os_families`<sup>Required</sup> <a name="os_families" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.osFamilies"></a>

```python
os_families: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `size_in_bytes`<sup>Required</sup> <a name="size_in_bytes" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.sizeInBytes"></a>

```python
size_in_bytes: str
```

- *Type:* str

---

##### `software_sources`<sup>Required</sup> <a name="software_sources" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.softwareSources"></a>

```python
software_sources: DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList">DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItems">DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItems</a>

---


### DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList <a name="DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source_software_packages

dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference <a name="DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source_software_packages

dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.property.isMandatoryForAutonomousLinux">is_mandatory_for_autonomous_linux</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.property.softwareSourceType">software_source_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSources">DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_mandatory_for_autonomous_linux`<sup>Required</sup> <a name="is_mandatory_for_autonomous_linux" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.property.isMandatoryForAutonomousLinux"></a>

```python
is_mandatory_for_autonomous_linux: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `software_source_type`<sup>Required</sup> <a name="software_source_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.property.softwareSourceType"></a>

```python
software_source_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSources
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSources">DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSources</a>

---


### DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionList <a name="DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source_software_packages

dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference <a name="DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source_software_packages

dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsList">DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollection">DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.property.items"></a>

```python
items: DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsList">DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollection">DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollection</a>

---



