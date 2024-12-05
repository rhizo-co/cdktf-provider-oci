# `dataOciOsmanagementSoftwareSourceModuleStreamProfile` Submodule <a name="`dataOciOsmanagementSoftwareSourceModuleStreamProfile` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsmanagementSoftwareSourceModuleStreamProfile <a name="DataOciOsmanagementSoftwareSourceModuleStreamProfile" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_module_stream_profile oci_osmanagement_software_source_module_stream_profile}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osmanagement_software_source_module_stream_profile

dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  module_name: str,
  profile_name: str,
  software_source_id: str,
  stream_name: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.Initializer.parameter.moduleName">module_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_module_stream_profile#module_name DataOciOsmanagementSoftwareSourceModuleStreamProfile#module_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.Initializer.parameter.profileName">profile_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_module_stream_profile#profile_name DataOciOsmanagementSoftwareSourceModuleStreamProfile#profile_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.Initializer.parameter.softwareSourceId">software_source_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_module_stream_profile#software_source_id DataOciOsmanagementSoftwareSourceModuleStreamProfile#software_source_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.Initializer.parameter.streamName">stream_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_module_stream_profile#stream_name DataOciOsmanagementSoftwareSourceModuleStreamProfile#stream_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_module_stream_profile#id DataOciOsmanagementSoftwareSourceModuleStreamProfile#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `module_name`<sup>Required</sup> <a name="module_name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.Initializer.parameter.moduleName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_module_stream_profile#module_name DataOciOsmanagementSoftwareSourceModuleStreamProfile#module_name}.

---

##### `profile_name`<sup>Required</sup> <a name="profile_name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.Initializer.parameter.profileName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_module_stream_profile#profile_name DataOciOsmanagementSoftwareSourceModuleStreamProfile#profile_name}.

---

##### `software_source_id`<sup>Required</sup> <a name="software_source_id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.Initializer.parameter.softwareSourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_module_stream_profile#software_source_id DataOciOsmanagementSoftwareSourceModuleStreamProfile#software_source_id}.

---

##### `stream_name`<sup>Required</sup> <a name="stream_name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.Initializer.parameter.streamName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_module_stream_profile#stream_name DataOciOsmanagementSoftwareSourceModuleStreamProfile#stream_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_module_stream_profile#id DataOciOsmanagementSoftwareSourceModuleStreamProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciOsmanagementSoftwareSourceModuleStreamProfile resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osmanagement_software_source_module_stream_profile

dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osmanagement_software_source_module_stream_profile

dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osmanagement_software_source_module_stream_profile

dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osmanagement_software_source_module_stream_profile

dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciOsmanagementSoftwareSourceModuleStreamProfile resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciOsmanagementSoftwareSourceModuleStreamProfile to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciOsmanagementSoftwareSourceModuleStreamProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_module_stream_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsmanagementSoftwareSourceModuleStreamProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.property.isDefault">is_default</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.property.packages">packages</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.property.moduleNameInput">module_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.property.profileNameInput">profile_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.property.softwareSourceIdInput">software_source_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.property.streamNameInput">stream_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.property.moduleName">module_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.property.profileName">profile_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.property.softwareSourceId">software_source_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.property.streamName">stream_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `is_default`<sup>Required</sup> <a name="is_default" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.property.isDefault"></a>

```python
is_default: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `packages`<sup>Required</sup> <a name="packages" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.property.packages"></a>

```python
packages: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `module_name_input`<sup>Optional</sup> <a name="module_name_input" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.property.moduleNameInput"></a>

```python
module_name_input: str
```

- *Type:* str

---

##### `profile_name_input`<sup>Optional</sup> <a name="profile_name_input" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.property.profileNameInput"></a>

```python
profile_name_input: str
```

- *Type:* str

---

##### `software_source_id_input`<sup>Optional</sup> <a name="software_source_id_input" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.property.softwareSourceIdInput"></a>

```python
software_source_id_input: str
```

- *Type:* str

---

##### `stream_name_input`<sup>Optional</sup> <a name="stream_name_input" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.property.streamNameInput"></a>

```python
stream_name_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `module_name`<sup>Required</sup> <a name="module_name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.property.moduleName"></a>

```python
module_name: str
```

- *Type:* str

---

##### `profile_name`<sup>Required</sup> <a name="profile_name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.property.profileName"></a>

```python
profile_name: str
```

- *Type:* str

---

##### `software_source_id`<sup>Required</sup> <a name="software_source_id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.property.softwareSourceId"></a>

```python
software_source_id: str
```

- *Type:* str

---

##### `stream_name`<sup>Required</sup> <a name="stream_name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.property.streamName"></a>

```python
stream_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfile.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsmanagementSoftwareSourceModuleStreamProfileConfig <a name="DataOciOsmanagementSoftwareSourceModuleStreamProfileConfig" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfileConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfileConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osmanagement_software_source_module_stream_profile

dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfileConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  module_name: str,
  profile_name: str,
  software_source_id: str,
  stream_name: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfileConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfileConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfileConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfileConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfileConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfileConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfileConfig.property.moduleName">module_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_module_stream_profile#module_name DataOciOsmanagementSoftwareSourceModuleStreamProfile#module_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfileConfig.property.profileName">profile_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_module_stream_profile#profile_name DataOciOsmanagementSoftwareSourceModuleStreamProfile#profile_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfileConfig.property.softwareSourceId">software_source_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_module_stream_profile#software_source_id DataOciOsmanagementSoftwareSourceModuleStreamProfile#software_source_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfileConfig.property.streamName">stream_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_module_stream_profile#stream_name DataOciOsmanagementSoftwareSourceModuleStreamProfile#stream_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfileConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_module_stream_profile#id DataOciOsmanagementSoftwareSourceModuleStreamProfile#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfileConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfileConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfileConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfileConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfileConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfileConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfileConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `module_name`<sup>Required</sup> <a name="module_name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfileConfig.property.moduleName"></a>

```python
module_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_module_stream_profile#module_name DataOciOsmanagementSoftwareSourceModuleStreamProfile#module_name}.

---

##### `profile_name`<sup>Required</sup> <a name="profile_name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfileConfig.property.profileName"></a>

```python
profile_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_module_stream_profile#profile_name DataOciOsmanagementSoftwareSourceModuleStreamProfile#profile_name}.

---

##### `software_source_id`<sup>Required</sup> <a name="software_source_id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfileConfig.property.softwareSourceId"></a>

```python
software_source_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_module_stream_profile#software_source_id DataOciOsmanagementSoftwareSourceModuleStreamProfile#software_source_id}.

---

##### `stream_name`<sup>Required</sup> <a name="stream_name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfileConfig.property.streamName"></a>

```python
stream_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_module_stream_profile#stream_name DataOciOsmanagementSoftwareSourceModuleStreamProfile#stream_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSourceModuleStreamProfile.DataOciOsmanagementSoftwareSourceModuleStreamProfileConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_source_module_stream_profile#id DataOciOsmanagementSoftwareSourceModuleStreamProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



