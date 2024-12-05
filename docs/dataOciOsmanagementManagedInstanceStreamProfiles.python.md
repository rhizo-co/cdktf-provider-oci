# `dataOciOsmanagementManagedInstanceStreamProfiles` Submodule <a name="`dataOciOsmanagementManagedInstanceStreamProfiles` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsmanagementManagedInstanceStreamProfiles <a name="DataOciOsmanagementManagedInstanceStreamProfiles" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles oci_osmanagement_managed_instance_stream_profiles}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osmanagement_managed_instance_stream_profiles

dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  managed_instance_id: str,
  compartment_id: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciOsmanagementManagedInstanceStreamProfilesFilter]] = None,
  id: str = None,
  module_name: str = None,
  profile_name: str = None,
  profile_status: str = None,
  stream_name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.Initializer.parameter.managedInstanceId">managed_instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#managed_instance_id DataOciOsmanagementManagedInstanceStreamProfiles#managed_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#compartment_id DataOciOsmanagementManagedInstanceStreamProfiles#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilter">DataOciOsmanagementManagedInstanceStreamProfilesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#id DataOciOsmanagementManagedInstanceStreamProfiles#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.Initializer.parameter.moduleName">module_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#module_name DataOciOsmanagementManagedInstanceStreamProfiles#module_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.Initializer.parameter.profileName">profile_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#profile_name DataOciOsmanagementManagedInstanceStreamProfiles#profile_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.Initializer.parameter.profileStatus">profile_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#profile_status DataOciOsmanagementManagedInstanceStreamProfiles#profile_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.Initializer.parameter.streamName">stream_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#stream_name DataOciOsmanagementManagedInstanceStreamProfiles#stream_name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `managed_instance_id`<sup>Required</sup> <a name="managed_instance_id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.Initializer.parameter.managedInstanceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#managed_instance_id DataOciOsmanagementManagedInstanceStreamProfiles#managed_instance_id}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#compartment_id DataOciOsmanagementManagedInstanceStreamProfiles#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilter">DataOciOsmanagementManagedInstanceStreamProfilesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#filter DataOciOsmanagementManagedInstanceStreamProfiles#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#id DataOciOsmanagementManagedInstanceStreamProfiles#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `module_name`<sup>Optional</sup> <a name="module_name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.Initializer.parameter.moduleName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#module_name DataOciOsmanagementManagedInstanceStreamProfiles#module_name}.

---

##### `profile_name`<sup>Optional</sup> <a name="profile_name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.Initializer.parameter.profileName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#profile_name DataOciOsmanagementManagedInstanceStreamProfiles#profile_name}.

---

##### `profile_status`<sup>Optional</sup> <a name="profile_status" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.Initializer.parameter.profileStatus"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#profile_status DataOciOsmanagementManagedInstanceStreamProfiles#profile_status}.

---

##### `stream_name`<sup>Optional</sup> <a name="stream_name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.Initializer.parameter.streamName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#stream_name DataOciOsmanagementManagedInstanceStreamProfiles#stream_name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.resetModuleName">reset_module_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.resetProfileName">reset_profile_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.resetProfileStatus">reset_profile_status</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.resetStreamName">reset_stream_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciOsmanagementManagedInstanceStreamProfilesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilter">DataOciOsmanagementManagedInstanceStreamProfilesFilter</a>]]

---

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_module_name` <a name="reset_module_name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.resetModuleName"></a>

```python
def reset_module_name() -> None
```

##### `reset_profile_name` <a name="reset_profile_name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.resetProfileName"></a>

```python
def reset_profile_name() -> None
```

##### `reset_profile_status` <a name="reset_profile_status" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.resetProfileStatus"></a>

```python
def reset_profile_status() -> None
```

##### `reset_stream_name` <a name="reset_stream_name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.resetStreamName"></a>

```python
def reset_stream_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciOsmanagementManagedInstanceStreamProfiles resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osmanagement_managed_instance_stream_profiles

dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osmanagement_managed_instance_stream_profiles

dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osmanagement_managed_instance_stream_profiles

dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osmanagement_managed_instance_stream_profiles

dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciOsmanagementManagedInstanceStreamProfiles resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciOsmanagementManagedInstanceStreamProfiles to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciOsmanagementManagedInstanceStreamProfiles that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsmanagementManagedInstanceStreamProfiles to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList">DataOciOsmanagementManagedInstanceStreamProfilesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.moduleStreamProfileOnManagedInstances">module_stream_profile_on_managed_instances</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList">DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilter">DataOciOsmanagementManagedInstanceStreamProfilesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.managedInstanceIdInput">managed_instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.moduleNameInput">module_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.profileNameInput">profile_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.profileStatusInput">profile_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.streamNameInput">stream_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.managedInstanceId">managed_instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.moduleName">module_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.profileName">profile_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.profileStatus">profile_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.streamName">stream_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.filter"></a>

```python
filter: DataOciOsmanagementManagedInstanceStreamProfilesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList">DataOciOsmanagementManagedInstanceStreamProfilesFilterList</a>

---

##### `module_stream_profile_on_managed_instances`<sup>Required</sup> <a name="module_stream_profile_on_managed_instances" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.moduleStreamProfileOnManagedInstances"></a>

```python
module_stream_profile_on_managed_instances: DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList">DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciOsmanagementManagedInstanceStreamProfilesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilter">DataOciOsmanagementManagedInstanceStreamProfilesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `managed_instance_id_input`<sup>Optional</sup> <a name="managed_instance_id_input" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.managedInstanceIdInput"></a>

```python
managed_instance_id_input: str
```

- *Type:* str

---

##### `module_name_input`<sup>Optional</sup> <a name="module_name_input" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.moduleNameInput"></a>

```python
module_name_input: str
```

- *Type:* str

---

##### `profile_name_input`<sup>Optional</sup> <a name="profile_name_input" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.profileNameInput"></a>

```python
profile_name_input: str
```

- *Type:* str

---

##### `profile_status_input`<sup>Optional</sup> <a name="profile_status_input" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.profileStatusInput"></a>

```python
profile_status_input: str
```

- *Type:* str

---

##### `stream_name_input`<sup>Optional</sup> <a name="stream_name_input" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.streamNameInput"></a>

```python
stream_name_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `managed_instance_id`<sup>Required</sup> <a name="managed_instance_id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.managedInstanceId"></a>

```python
managed_instance_id: str
```

- *Type:* str

---

##### `module_name`<sup>Required</sup> <a name="module_name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.moduleName"></a>

```python
module_name: str
```

- *Type:* str

---

##### `profile_name`<sup>Required</sup> <a name="profile_name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.profileName"></a>

```python
profile_name: str
```

- *Type:* str

---

##### `profile_status`<sup>Required</sup> <a name="profile_status" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.profileStatus"></a>

```python
profile_status: str
```

- *Type:* str

---

##### `stream_name`<sup>Required</sup> <a name="stream_name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.streamName"></a>

```python
stream_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfiles.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsmanagementManagedInstanceStreamProfilesConfig <a name="DataOciOsmanagementManagedInstanceStreamProfilesConfig" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osmanagement_managed_instance_stream_profiles

dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  managed_instance_id: str,
  compartment_id: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciOsmanagementManagedInstanceStreamProfilesFilter]] = None,
  id: str = None,
  module_name: str = None,
  profile_name: str = None,
  profile_status: str = None,
  stream_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.managedInstanceId">managed_instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#managed_instance_id DataOciOsmanagementManagedInstanceStreamProfiles#managed_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#compartment_id DataOciOsmanagementManagedInstanceStreamProfiles#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilter">DataOciOsmanagementManagedInstanceStreamProfilesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#id DataOciOsmanagementManagedInstanceStreamProfiles#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.moduleName">module_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#module_name DataOciOsmanagementManagedInstanceStreamProfiles#module_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.profileName">profile_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#profile_name DataOciOsmanagementManagedInstanceStreamProfiles#profile_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.profileStatus">profile_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#profile_status DataOciOsmanagementManagedInstanceStreamProfiles#profile_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.streamName">stream_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#stream_name DataOciOsmanagementManagedInstanceStreamProfiles#stream_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `managed_instance_id`<sup>Required</sup> <a name="managed_instance_id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.managedInstanceId"></a>

```python
managed_instance_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#managed_instance_id DataOciOsmanagementManagedInstanceStreamProfiles#managed_instance_id}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#compartment_id DataOciOsmanagementManagedInstanceStreamProfiles#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciOsmanagementManagedInstanceStreamProfilesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilter">DataOciOsmanagementManagedInstanceStreamProfilesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#filter DataOciOsmanagementManagedInstanceStreamProfiles#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#id DataOciOsmanagementManagedInstanceStreamProfiles#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `module_name`<sup>Optional</sup> <a name="module_name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.moduleName"></a>

```python
module_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#module_name DataOciOsmanagementManagedInstanceStreamProfiles#module_name}.

---

##### `profile_name`<sup>Optional</sup> <a name="profile_name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.profileName"></a>

```python
profile_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#profile_name DataOciOsmanagementManagedInstanceStreamProfiles#profile_name}.

---

##### `profile_status`<sup>Optional</sup> <a name="profile_status" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.profileStatus"></a>

```python
profile_status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#profile_status DataOciOsmanagementManagedInstanceStreamProfiles#profile_status}.

---

##### `stream_name`<sup>Optional</sup> <a name="stream_name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesConfig.property.streamName"></a>

```python
stream_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#stream_name DataOciOsmanagementManagedInstanceStreamProfiles#stream_name}.

---

### DataOciOsmanagementManagedInstanceStreamProfilesFilter <a name="DataOciOsmanagementManagedInstanceStreamProfilesFilter" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osmanagement_managed_instance_stream_profiles

dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#name DataOciOsmanagementManagedInstanceStreamProfiles#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#values DataOciOsmanagementManagedInstanceStreamProfiles#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#regex DataOciOsmanagementManagedInstanceStreamProfiles#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#name DataOciOsmanagementManagedInstanceStreamProfiles#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#values DataOciOsmanagementManagedInstanceStreamProfiles#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_stream_profiles#regex DataOciOsmanagementManagedInstanceStreamProfiles#regex}.

---

### DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstances <a name="DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstances" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstances"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstances.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osmanagement_managed_instance_stream_profiles

dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstances()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOsmanagementManagedInstanceStreamProfilesFilterList <a name="DataOciOsmanagementManagedInstanceStreamProfilesFilterList" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osmanagement_managed_instance_stream_profiles

dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilter">DataOciOsmanagementManagedInstanceStreamProfilesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciOsmanagementManagedInstanceStreamProfilesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilter">DataOciOsmanagementManagedInstanceStreamProfilesFilter</a>]]

---


### DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference <a name="DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osmanagement_managed_instance_stream_profiles

dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilter">DataOciOsmanagementManagedInstanceStreamProfilesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciOsmanagementManagedInstanceStreamProfilesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesFilter">DataOciOsmanagementManagedInstanceStreamProfilesFilter</a>]

---


### DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList <a name="DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osmanagement_managed_instance_stream_profiles

dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference <a name="DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osmanagement_managed_instance_stream_profiles

dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.property.moduleName">module_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.property.profileName">profile_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.property.streamName">stream_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.property.timeModified">time_modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstances">DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstances</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `module_name`<sup>Required</sup> <a name="module_name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.property.moduleName"></a>

```python
module_name: str
```

- *Type:* str

---

##### `profile_name`<sup>Required</sup> <a name="profile_name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.property.profileName"></a>

```python
profile_name: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `stream_name`<sup>Required</sup> <a name="stream_name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.property.streamName"></a>

```python
stream_name: str
```

- *Type:* str

---

##### `time_modified`<sup>Required</sup> <a name="time_modified" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.property.timeModified"></a>

```python
time_modified: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstancesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstances
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceStreamProfiles.DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstances">DataOciOsmanagementManagedInstanceStreamProfilesModuleStreamProfileOnManagedInstances</a>

---



