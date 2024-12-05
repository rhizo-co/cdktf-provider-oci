# `dataOciOsManagementHubSoftwareSourceSoftwarePackage` Submodule <a name="`dataOciOsManagementHubSoftwareSourceSoftwarePackage` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsManagementHubSoftwareSourceSoftwarePackage <a name="DataOciOsManagementHubSoftwareSourceSoftwarePackage" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_software_package oci_os_management_hub_software_source_software_package}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source_software_package

dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  software_package_name: str,
  software_source_id: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.Initializer.parameter.softwarePackageName">software_package_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_software_package#software_package_name DataOciOsManagementHubSoftwareSourceSoftwarePackage#software_package_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.Initializer.parameter.softwareSourceId">software_source_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_software_package#software_source_id DataOciOsManagementHubSoftwareSourceSoftwarePackage#software_source_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_software_package#id DataOciOsManagementHubSoftwareSourceSoftwarePackage#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `software_package_name`<sup>Required</sup> <a name="software_package_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.Initializer.parameter.softwarePackageName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_software_package#software_package_name DataOciOsManagementHubSoftwareSourceSoftwarePackage#software_package_name}.

---

##### `software_source_id`<sup>Required</sup> <a name="software_source_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.Initializer.parameter.softwareSourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_software_package#software_source_id DataOciOsManagementHubSoftwareSourceSoftwarePackage#software_source_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_software_package#id DataOciOsManagementHubSoftwareSourceSoftwarePackage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciOsManagementHubSoftwareSourceSoftwarePackage resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source_software_package

dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source_software_package

dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source_software_package

dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source_software_package

dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciOsManagementHubSoftwareSourceSoftwarePackage resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciOsManagementHubSoftwareSourceSoftwarePackage to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciOsManagementHubSoftwareSourceSoftwarePackage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_software_package#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsManagementHubSoftwareSourceSoftwarePackage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.architecture">architecture</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.checksum">checksum</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.checksumType">checksum_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.dependencies">dependencies</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesList">DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.files">files</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesList">DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.isLatest">is_latest</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.lastModifiedDate">last_modified_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.osFamilies">os_families</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.sizeInBytes">size_in_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.softwareSources">software_sources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesList">DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.softwarePackageNameInput">software_package_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.softwareSourceIdInput">software_source_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.softwarePackageName">software_package_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.softwareSourceId">software_source_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.architecture"></a>

```python
architecture: str
```

- *Type:* str

---

##### `checksum`<sup>Required</sup> <a name="checksum" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.checksum"></a>

```python
checksum: str
```

- *Type:* str

---

##### `checksum_type`<sup>Required</sup> <a name="checksum_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.checksumType"></a>

```python
checksum_type: str
```

- *Type:* str

---

##### `dependencies`<sup>Required</sup> <a name="dependencies" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.dependencies"></a>

```python
dependencies: DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesList">DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesList</a>

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `files`<sup>Required</sup> <a name="files" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.files"></a>

```python
files: DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesList">DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesList</a>

---

##### `is_latest`<sup>Required</sup> <a name="is_latest" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.isLatest"></a>

```python
is_latest: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `last_modified_date`<sup>Required</sup> <a name="last_modified_date" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.lastModifiedDate"></a>

```python
last_modified_date: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `os_families`<sup>Required</sup> <a name="os_families" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.osFamilies"></a>

```python
os_families: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `size_in_bytes`<sup>Required</sup> <a name="size_in_bytes" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.sizeInBytes"></a>

```python
size_in_bytes: str
```

- *Type:* str

---

##### `software_sources`<sup>Required</sup> <a name="software_sources" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.softwareSources"></a>

```python
software_sources: DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesList">DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `software_package_name_input`<sup>Optional</sup> <a name="software_package_name_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.softwarePackageNameInput"></a>

```python
software_package_name_input: str
```

- *Type:* str

---

##### `software_source_id_input`<sup>Optional</sup> <a name="software_source_id_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.softwareSourceIdInput"></a>

```python
software_source_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `software_package_name`<sup>Required</sup> <a name="software_package_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.softwarePackageName"></a>

```python
software_package_name: str
```

- *Type:* str

---

##### `software_source_id`<sup>Required</sup> <a name="software_source_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.softwareSourceId"></a>

```python
software_source_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackage.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsManagementHubSoftwareSourceSoftwarePackageConfig <a name="DataOciOsManagementHubSoftwareSourceSoftwarePackageConfig" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source_software_package

dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  software_package_name: str,
  software_source_id: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageConfig.property.softwarePackageName">software_package_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_software_package#software_package_name DataOciOsManagementHubSoftwareSourceSoftwarePackage#software_package_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageConfig.property.softwareSourceId">software_source_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_software_package#software_source_id DataOciOsManagementHubSoftwareSourceSoftwarePackage#software_source_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_software_package#id DataOciOsManagementHubSoftwareSourceSoftwarePackage#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `software_package_name`<sup>Required</sup> <a name="software_package_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageConfig.property.softwarePackageName"></a>

```python
software_package_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_software_package#software_package_name DataOciOsManagementHubSoftwareSourceSoftwarePackage#software_package_name}.

---

##### `software_source_id`<sup>Required</sup> <a name="software_source_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageConfig.property.softwareSourceId"></a>

```python
software_source_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_software_package#software_source_id DataOciOsManagementHubSoftwareSourceSoftwarePackage#software_source_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_software_package#id DataOciOsManagementHubSoftwareSourceSoftwarePackage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciOsManagementHubSoftwareSourceSoftwarePackageDependencies <a name="DataOciOsManagementHubSoftwareSourceSoftwarePackageDependencies" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependencies"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependencies.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source_software_package

dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependencies()
```


### DataOciOsManagementHubSoftwareSourceSoftwarePackageFiles <a name="DataOciOsManagementHubSoftwareSourceSoftwarePackageFiles" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFiles"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFiles.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source_software_package

dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFiles()
```


### DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSources <a name="DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSources" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSources.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source_software_package

dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSources()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesList <a name="DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source_software_package

dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference <a name="DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source_software_package

dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.property.dependency">dependency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.property.dependencyModifier">dependency_modifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.property.dependencyType">dependency_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependencies">DataOciOsManagementHubSoftwareSourceSoftwarePackageDependencies</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dependency`<sup>Required</sup> <a name="dependency" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.property.dependency"></a>

```python
dependency: str
```

- *Type:* str

---

##### `dependency_modifier`<sup>Required</sup> <a name="dependency_modifier" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.property.dependencyModifier"></a>

```python
dependency_modifier: str
```

- *Type:* str

---

##### `dependency_type`<sup>Required</sup> <a name="dependency_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.property.dependencyType"></a>

```python
dependency_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependenciesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOsManagementHubSoftwareSourceSoftwarePackageDependencies
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageDependencies">DataOciOsManagementHubSoftwareSourceSoftwarePackageDependencies</a>

---


### DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesList <a name="DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source_software_package

dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference <a name="DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source_software_package

dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.property.checksum">checksum</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.property.checksumType">checksum_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.property.sizeInBytes">size_in_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.property.timeModified">time_modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFiles">DataOciOsManagementHubSoftwareSourceSoftwarePackageFiles</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `checksum`<sup>Required</sup> <a name="checksum" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.property.checksum"></a>

```python
checksum: str
```

- *Type:* str

---

##### `checksum_type`<sup>Required</sup> <a name="checksum_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.property.checksumType"></a>

```python
checksum_type: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `size_in_bytes`<sup>Required</sup> <a name="size_in_bytes" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.property.sizeInBytes"></a>

```python
size_in_bytes: str
```

- *Type:* str

---

##### `time_modified`<sup>Required</sup> <a name="time_modified" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.property.timeModified"></a>

```python
time_modified: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFilesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOsManagementHubSoftwareSourceSoftwarePackageFiles
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageFiles">DataOciOsManagementHubSoftwareSourceSoftwarePackageFiles</a>

---


### DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesList <a name="DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source_software_package

dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference <a name="DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source_software_package

dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.property.isMandatoryForAutonomousLinux">is_mandatory_for_autonomous_linux</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.property.softwareSourceType">software_source_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSources">DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_mandatory_for_autonomous_linux`<sup>Required</sup> <a name="is_mandatory_for_autonomous_linux" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.property.isMandatoryForAutonomousLinux"></a>

```python
is_mandatory_for_autonomous_linux: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `software_source_type`<sup>Required</sup> <a name="software_source_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.property.softwareSourceType"></a>

```python
software_source_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSourcesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSources
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackage.DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSources">DataOciOsManagementHubSoftwareSourceSoftwarePackageSoftwareSources</a>

---



