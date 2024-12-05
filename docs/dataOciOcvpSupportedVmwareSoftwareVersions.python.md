# `dataOciOcvpSupportedVmwareSoftwareVersions` Submodule <a name="`dataOciOcvpSupportedVmwareSoftwareVersions` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOcvpSupportedVmwareSoftwareVersions <a name="DataOciOcvpSupportedVmwareSoftwareVersions" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_vmware_software_versions oci_ocvp_supported_vmware_software_versions}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ocvp_supported_vmware_software_versions

dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions(
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
  filter: typing.Union[IResolvable, typing.List[DataOciOcvpSupportedVmwareSoftwareVersionsFilter]] = None,
  host_shape_name: str = None,
  id: str = None,
  version: str = None,
  version_to_upgrade: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_vmware_software_versions#compartment_id DataOciOcvpSupportedVmwareSoftwareVersions#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilter">DataOciOcvpSupportedVmwareSoftwareVersionsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.Initializer.parameter.hostShapeName">host_shape_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_vmware_software_versions#host_shape_name DataOciOcvpSupportedVmwareSoftwareVersions#host_shape_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_vmware_software_versions#id DataOciOcvpSupportedVmwareSoftwareVersions#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.Initializer.parameter.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_vmware_software_versions#version DataOciOcvpSupportedVmwareSoftwareVersions#version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.Initializer.parameter.versionToUpgrade">version_to_upgrade</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_vmware_software_versions#version_to_upgrade DataOciOcvpSupportedVmwareSoftwareVersions#version_to_upgrade}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_vmware_software_versions#compartment_id DataOciOcvpSupportedVmwareSoftwareVersions#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilter">DataOciOcvpSupportedVmwareSoftwareVersionsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_vmware_software_versions#filter DataOciOcvpSupportedVmwareSoftwareVersions#filter}

---

##### `host_shape_name`<sup>Optional</sup> <a name="host_shape_name" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.Initializer.parameter.hostShapeName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_vmware_software_versions#host_shape_name DataOciOcvpSupportedVmwareSoftwareVersions#host_shape_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_vmware_software_versions#id DataOciOcvpSupportedVmwareSoftwareVersions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `version`<sup>Optional</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.Initializer.parameter.version"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_vmware_software_versions#version DataOciOcvpSupportedVmwareSoftwareVersions#version}.

---

##### `version_to_upgrade`<sup>Optional</sup> <a name="version_to_upgrade" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.Initializer.parameter.versionToUpgrade"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_vmware_software_versions#version_to_upgrade DataOciOcvpSupportedVmwareSoftwareVersions#version_to_upgrade}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.resetHostShapeName">reset_host_shape_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.resetVersion">reset_version</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.resetVersionToUpgrade">reset_version_to_upgrade</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciOcvpSupportedVmwareSoftwareVersionsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilter">DataOciOcvpSupportedVmwareSoftwareVersionsFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_host_shape_name` <a name="reset_host_shape_name" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.resetHostShapeName"></a>

```python
def reset_host_shape_name() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_version` <a name="reset_version" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.resetVersion"></a>

```python
def reset_version() -> None
```

##### `reset_version_to_upgrade` <a name="reset_version_to_upgrade" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.resetVersionToUpgrade"></a>

```python
def reset_version_to_upgrade() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciOcvpSupportedVmwareSoftwareVersions resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ocvp_supported_vmware_software_versions

dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ocvp_supported_vmware_software_versions

dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ocvp_supported_vmware_software_versions

dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ocvp_supported_vmware_software_versions

dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciOcvpSupportedVmwareSoftwareVersions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciOcvpSupportedVmwareSoftwareVersions to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciOcvpSupportedVmwareSoftwareVersions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_vmware_software_versions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOcvpSupportedVmwareSoftwareVersions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList">DataOciOcvpSupportedVmwareSoftwareVersionsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList">DataOciOcvpSupportedVmwareSoftwareVersionsItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilter">DataOciOcvpSupportedVmwareSoftwareVersionsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.hostShapeNameInput">host_shape_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.versionToUpgradeInput">version_to_upgrade_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.hostShapeName">host_shape_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.versionToUpgrade">version_to_upgrade</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.filter"></a>

```python
filter: DataOciOcvpSupportedVmwareSoftwareVersionsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList">DataOciOcvpSupportedVmwareSoftwareVersionsFilterList</a>

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.items"></a>

```python
items: DataOciOcvpSupportedVmwareSoftwareVersionsItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList">DataOciOcvpSupportedVmwareSoftwareVersionsItemsList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciOcvpSupportedVmwareSoftwareVersionsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilter">DataOciOcvpSupportedVmwareSoftwareVersionsFilter</a>]]

---

##### `host_shape_name_input`<sup>Optional</sup> <a name="host_shape_name_input" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.hostShapeNameInput"></a>

```python
host_shape_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `version_to_upgrade_input`<sup>Optional</sup> <a name="version_to_upgrade_input" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.versionToUpgradeInput"></a>

```python
version_to_upgrade_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `host_shape_name`<sup>Required</sup> <a name="host_shape_name" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.hostShapeName"></a>

```python
host_shape_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `version_to_upgrade`<sup>Required</sup> <a name="version_to_upgrade" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.versionToUpgrade"></a>

```python
version_to_upgrade: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersions.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOcvpSupportedVmwareSoftwareVersionsConfig <a name="DataOciOcvpSupportedVmwareSoftwareVersionsConfig" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ocvp_supported_vmware_software_versions

dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciOcvpSupportedVmwareSoftwareVersionsFilter]] = None,
  host_shape_name: str = None,
  id: str = None,
  version: str = None,
  version_to_upgrade: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_vmware_software_versions#compartment_id DataOciOcvpSupportedVmwareSoftwareVersions#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilter">DataOciOcvpSupportedVmwareSoftwareVersionsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.property.hostShapeName">host_shape_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_vmware_software_versions#host_shape_name DataOciOcvpSupportedVmwareSoftwareVersions#host_shape_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_vmware_software_versions#id DataOciOcvpSupportedVmwareSoftwareVersions#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_vmware_software_versions#version DataOciOcvpSupportedVmwareSoftwareVersions#version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.property.versionToUpgrade">version_to_upgrade</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_vmware_software_versions#version_to_upgrade DataOciOcvpSupportedVmwareSoftwareVersions#version_to_upgrade}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_vmware_software_versions#compartment_id DataOciOcvpSupportedVmwareSoftwareVersions#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciOcvpSupportedVmwareSoftwareVersionsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilter">DataOciOcvpSupportedVmwareSoftwareVersionsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_vmware_software_versions#filter DataOciOcvpSupportedVmwareSoftwareVersions#filter}

---

##### `host_shape_name`<sup>Optional</sup> <a name="host_shape_name" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.property.hostShapeName"></a>

```python
host_shape_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_vmware_software_versions#host_shape_name DataOciOcvpSupportedVmwareSoftwareVersions#host_shape_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_vmware_software_versions#id DataOciOcvpSupportedVmwareSoftwareVersions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `version`<sup>Optional</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_vmware_software_versions#version DataOciOcvpSupportedVmwareSoftwareVersions#version}.

---

##### `version_to_upgrade`<sup>Optional</sup> <a name="version_to_upgrade" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsConfig.property.versionToUpgrade"></a>

```python
version_to_upgrade: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_vmware_software_versions#version_to_upgrade DataOciOcvpSupportedVmwareSoftwareVersions#version_to_upgrade}.

---

### DataOciOcvpSupportedVmwareSoftwareVersionsFilter <a name="DataOciOcvpSupportedVmwareSoftwareVersionsFilter" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ocvp_supported_vmware_software_versions

dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_vmware_software_versions#name DataOciOcvpSupportedVmwareSoftwareVersions#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_vmware_software_versions#values DataOciOcvpSupportedVmwareSoftwareVersions#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_vmware_software_versions#regex DataOciOcvpSupportedVmwareSoftwareVersions#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_vmware_software_versions#name DataOciOcvpSupportedVmwareSoftwareVersions#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_vmware_software_versions#values DataOciOcvpSupportedVmwareSoftwareVersions#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_supported_vmware_software_versions#regex DataOciOcvpSupportedVmwareSoftwareVersions#regex}.

---

### DataOciOcvpSupportedVmwareSoftwareVersionsItems <a name="DataOciOcvpSupportedVmwareSoftwareVersionsItems" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ocvp_supported_vmware_software_versions

dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItems()
```


### DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersions <a name="DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersions" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ocvp_supported_vmware_software_versions

dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersions()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOcvpSupportedVmwareSoftwareVersionsFilterList <a name="DataOciOcvpSupportedVmwareSoftwareVersionsFilterList" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ocvp_supported_vmware_software_versions

dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilter">DataOciOcvpSupportedVmwareSoftwareVersionsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciOcvpSupportedVmwareSoftwareVersionsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilter">DataOciOcvpSupportedVmwareSoftwareVersionsFilter</a>]]

---


### DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference <a name="DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ocvp_supported_vmware_software_versions

dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilter">DataOciOcvpSupportedVmwareSoftwareVersionsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciOcvpSupportedVmwareSoftwareVersionsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsFilter">DataOciOcvpSupportedVmwareSoftwareVersionsFilter</a>]

---


### DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList <a name="DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ocvp_supported_vmware_software_versions

dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference <a name="DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ocvp_supported_vmware_software_versions

dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.property.supportedHostShapeNames">supported_host_shape_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersions">DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `supported_host_shape_names`<sup>Required</sup> <a name="supported_host_shape_names" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.property.supportedHostShapeNames"></a>

```python
supported_host_shape_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersions">DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersions</a>

---


### DataOciOcvpSupportedVmwareSoftwareVersionsItemsList <a name="DataOciOcvpSupportedVmwareSoftwareVersionsItemsList" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ocvp_supported_vmware_software_versions

dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference <a name="DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ocvp_supported_vmware_software_versions

dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.property.esxiSoftwareVersions">esxi_software_versions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList">DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItems">DataOciOcvpSupportedVmwareSoftwareVersionsItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `esxi_software_versions`<sup>Required</sup> <a name="esxi_software_versions" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.property.esxiSoftwareVersions"></a>

```python
esxi_software_versions: DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList">DataOciOcvpSupportedVmwareSoftwareVersionsItemsEsxiSoftwareVersionsList</a>

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOcvpSupportedVmwareSoftwareVersionsItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSupportedVmwareSoftwareVersions.DataOciOcvpSupportedVmwareSoftwareVersionsItems">DataOciOcvpSupportedVmwareSoftwareVersionsItems</a>

---



