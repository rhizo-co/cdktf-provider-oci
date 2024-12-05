# `dataOciOsmanagementSoftwareSourceStreamProfiles` Submodule <a name="`dataOciOsmanagementSoftwareSourceStreamProfiles` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsmanagementSoftwareSourceStreamProfiles <a name="DataOciOsmanagementSoftwareSourceStreamProfiles" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_stream_profiles oci_osmanagement_software_source_stream_profiles}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osmanagement_software_source_stream_profiles

dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles(
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
  compartment_id: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciOsmanagementSoftwareSourceStreamProfilesFilter]] = None,
  id: str = None,
  module_name: str = None,
  profile_name: str = None,
  stream_name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.Initializer.parameter.softwareSourceId">software_source_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_stream_profiles#software_source_id DataOciOsmanagementSoftwareSourceStreamProfiles#software_source_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_stream_profiles#compartment_id DataOciOsmanagementSoftwareSourceStreamProfiles#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilter">DataOciOsmanagementSoftwareSourceStreamProfilesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_stream_profiles#id DataOciOsmanagementSoftwareSourceStreamProfiles#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.Initializer.parameter.moduleName">module_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_stream_profiles#module_name DataOciOsmanagementSoftwareSourceStreamProfiles#module_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.Initializer.parameter.profileName">profile_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_stream_profiles#profile_name DataOciOsmanagementSoftwareSourceStreamProfiles#profile_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.Initializer.parameter.streamName">stream_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_stream_profiles#stream_name DataOciOsmanagementSoftwareSourceStreamProfiles#stream_name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `software_source_id`<sup>Required</sup> <a name="software_source_id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.Initializer.parameter.softwareSourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_stream_profiles#software_source_id DataOciOsmanagementSoftwareSourceStreamProfiles#software_source_id}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_stream_profiles#compartment_id DataOciOsmanagementSoftwareSourceStreamProfiles#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilter">DataOciOsmanagementSoftwareSourceStreamProfilesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_stream_profiles#filter DataOciOsmanagementSoftwareSourceStreamProfiles#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_stream_profiles#id DataOciOsmanagementSoftwareSourceStreamProfiles#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `module_name`<sup>Optional</sup> <a name="module_name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.Initializer.parameter.moduleName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_stream_profiles#module_name DataOciOsmanagementSoftwareSourceStreamProfiles#module_name}.

---

##### `profile_name`<sup>Optional</sup> <a name="profile_name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.Initializer.parameter.profileName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_stream_profiles#profile_name DataOciOsmanagementSoftwareSourceStreamProfiles#profile_name}.

---

##### `stream_name`<sup>Optional</sup> <a name="stream_name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.Initializer.parameter.streamName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_stream_profiles#stream_name DataOciOsmanagementSoftwareSourceStreamProfiles#stream_name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.resetModuleName">reset_module_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.resetProfileName">reset_profile_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.resetStreamName">reset_stream_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciOsmanagementSoftwareSourceStreamProfilesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilter">DataOciOsmanagementSoftwareSourceStreamProfilesFilter</a>]]

---

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_module_name` <a name="reset_module_name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.resetModuleName"></a>

```python
def reset_module_name() -> None
```

##### `reset_profile_name` <a name="reset_profile_name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.resetProfileName"></a>

```python
def reset_profile_name() -> None
```

##### `reset_stream_name` <a name="reset_stream_name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.resetStreamName"></a>

```python
def reset_stream_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciOsmanagementSoftwareSourceStreamProfiles resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osmanagement_software_source_stream_profiles

dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osmanagement_software_source_stream_profiles

dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osmanagement_software_source_stream_profiles

dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osmanagement_software_source_stream_profiles

dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciOsmanagementSoftwareSourceStreamProfiles resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciOsmanagementSoftwareSourceStreamProfiles to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciOsmanagementSoftwareSourceStreamProfiles that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_stream_profiles#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsmanagementSoftwareSourceStreamProfiles to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterList">DataOciOsmanagementSoftwareSourceStreamProfilesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.moduleStreamProfiles">module_stream_profiles</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesList">DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilter">DataOciOsmanagementSoftwareSourceStreamProfilesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.moduleNameInput">module_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.profileNameInput">profile_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.softwareSourceIdInput">software_source_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.streamNameInput">stream_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.moduleName">module_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.profileName">profile_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.softwareSourceId">software_source_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.streamName">stream_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.filter"></a>

```python
filter: DataOciOsmanagementSoftwareSourceStreamProfilesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterList">DataOciOsmanagementSoftwareSourceStreamProfilesFilterList</a>

---

##### `module_stream_profiles`<sup>Required</sup> <a name="module_stream_profiles" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.moduleStreamProfiles"></a>

```python
module_stream_profiles: DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesList">DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciOsmanagementSoftwareSourceStreamProfilesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilter">DataOciOsmanagementSoftwareSourceStreamProfilesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `module_name_input`<sup>Optional</sup> <a name="module_name_input" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.moduleNameInput"></a>

```python
module_name_input: str
```

- *Type:* str

---

##### `profile_name_input`<sup>Optional</sup> <a name="profile_name_input" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.profileNameInput"></a>

```python
profile_name_input: str
```

- *Type:* str

---

##### `software_source_id_input`<sup>Optional</sup> <a name="software_source_id_input" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.softwareSourceIdInput"></a>

```python
software_source_id_input: str
```

- *Type:* str

---

##### `stream_name_input`<sup>Optional</sup> <a name="stream_name_input" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.streamNameInput"></a>

```python
stream_name_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `module_name`<sup>Required</sup> <a name="module_name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.moduleName"></a>

```python
module_name: str
```

- *Type:* str

---

##### `profile_name`<sup>Required</sup> <a name="profile_name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.profileName"></a>

```python
profile_name: str
```

- *Type:* str

---

##### `software_source_id`<sup>Required</sup> <a name="software_source_id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.softwareSourceId"></a>

```python
software_source_id: str
```

- *Type:* str

---

##### `stream_name`<sup>Required</sup> <a name="stream_name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.streamName"></a>

```python
stream_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfiles.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsmanagementSoftwareSourceStreamProfilesConfig <a name="DataOciOsmanagementSoftwareSourceStreamProfilesConfig" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osmanagement_software_source_stream_profiles

dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  software_source_id: str,
  compartment_id: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciOsmanagementSoftwareSourceStreamProfilesFilter]] = None,
  id: str = None,
  module_name: str = None,
  profile_name: str = None,
  stream_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesConfig.property.softwareSourceId">software_source_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_stream_profiles#software_source_id DataOciOsmanagementSoftwareSourceStreamProfiles#software_source_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_stream_profiles#compartment_id DataOciOsmanagementSoftwareSourceStreamProfiles#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilter">DataOciOsmanagementSoftwareSourceStreamProfilesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_stream_profiles#id DataOciOsmanagementSoftwareSourceStreamProfiles#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesConfig.property.moduleName">module_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_stream_profiles#module_name DataOciOsmanagementSoftwareSourceStreamProfiles#module_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesConfig.property.profileName">profile_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_stream_profiles#profile_name DataOciOsmanagementSoftwareSourceStreamProfiles#profile_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesConfig.property.streamName">stream_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_stream_profiles#stream_name DataOciOsmanagementSoftwareSourceStreamProfiles#stream_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `software_source_id`<sup>Required</sup> <a name="software_source_id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesConfig.property.softwareSourceId"></a>

```python
software_source_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_stream_profiles#software_source_id DataOciOsmanagementSoftwareSourceStreamProfiles#software_source_id}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_stream_profiles#compartment_id DataOciOsmanagementSoftwareSourceStreamProfiles#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciOsmanagementSoftwareSourceStreamProfilesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilter">DataOciOsmanagementSoftwareSourceStreamProfilesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_stream_profiles#filter DataOciOsmanagementSoftwareSourceStreamProfiles#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_stream_profiles#id DataOciOsmanagementSoftwareSourceStreamProfiles#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `module_name`<sup>Optional</sup> <a name="module_name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesConfig.property.moduleName"></a>

```python
module_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_stream_profiles#module_name DataOciOsmanagementSoftwareSourceStreamProfiles#module_name}.

---

##### `profile_name`<sup>Optional</sup> <a name="profile_name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesConfig.property.profileName"></a>

```python
profile_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_stream_profiles#profile_name DataOciOsmanagementSoftwareSourceStreamProfiles#profile_name}.

---

##### `stream_name`<sup>Optional</sup> <a name="stream_name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesConfig.property.streamName"></a>

```python
stream_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_stream_profiles#stream_name DataOciOsmanagementSoftwareSourceStreamProfiles#stream_name}.

---

### DataOciOsmanagementSoftwareSourceStreamProfilesFilter <a name="DataOciOsmanagementSoftwareSourceStreamProfilesFilter" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osmanagement_software_source_stream_profiles

dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_stream_profiles#name DataOciOsmanagementSoftwareSourceStreamProfiles#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_stream_profiles#values DataOciOsmanagementSoftwareSourceStreamProfiles#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_stream_profiles#regex DataOciOsmanagementSoftwareSourceStreamProfiles#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_stream_profiles#name DataOciOsmanagementSoftwareSourceStreamProfiles#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_stream_profiles#values DataOciOsmanagementSoftwareSourceStreamProfiles#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_stream_profiles#regex DataOciOsmanagementSoftwareSourceStreamProfiles#regex}.

---

### DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfiles <a name="DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfiles" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfiles"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfiles.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osmanagement_software_source_stream_profiles

dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfiles()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOsmanagementSoftwareSourceStreamProfilesFilterList <a name="DataOciOsmanagementSoftwareSourceStreamProfilesFilterList" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osmanagement_software_source_stream_profiles

dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilter">DataOciOsmanagementSoftwareSourceStreamProfilesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciOsmanagementSoftwareSourceStreamProfilesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilter">DataOciOsmanagementSoftwareSourceStreamProfilesFilter</a>]]

---


### DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference <a name="DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osmanagement_software_source_stream_profiles

dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilter">DataOciOsmanagementSoftwareSourceStreamProfilesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciOsmanagementSoftwareSourceStreamProfilesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesFilter">DataOciOsmanagementSoftwareSourceStreamProfilesFilter</a>]

---


### DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesList <a name="DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesList" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osmanagement_software_source_stream_profiles

dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference <a name="DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osmanagement_software_source_stream_profiles

dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.property.moduleName">module_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.property.profileName">profile_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.property.streamName">stream_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfiles">DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfiles</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `module_name`<sup>Required</sup> <a name="module_name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.property.moduleName"></a>

```python
module_name: str
```

- *Type:* str

---

##### `profile_name`<sup>Required</sup> <a name="profile_name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.property.profileName"></a>

```python
profile_name: str
```

- *Type:* str

---

##### `stream_name`<sup>Required</sup> <a name="stream_name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.property.streamName"></a>

```python
stream_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfilesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfiles
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceStreamProfiles.DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfiles">DataOciOsmanagementSoftwareSourceStreamProfilesModuleStreamProfiles</a>

---



