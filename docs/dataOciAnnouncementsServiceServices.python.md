# `dataOciAnnouncementsServiceServices` Submodule <a name="`dataOciAnnouncementsServiceServices` Submodule" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciAnnouncementsServiceServices <a name="DataOciAnnouncementsServiceServices" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_services oci_announcements_service_services}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_announcements_service_services

dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices(
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
  comms_manager_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciAnnouncementsServiceServicesFilter]] = None,
  id: str = None,
  platform_type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_services#compartment_id DataOciAnnouncementsServiceServices#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.Initializer.parameter.commsManagerName">comms_manager_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_services#comms_manager_name DataOciAnnouncementsServiceServices#comms_manager_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilter">DataOciAnnouncementsServiceServicesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_services#id DataOciAnnouncementsServiceServices#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.Initializer.parameter.platformType">platform_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_services#platform_type DataOciAnnouncementsServiceServices#platform_type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_services#compartment_id DataOciAnnouncementsServiceServices#compartment_id}.

---

##### `comms_manager_name`<sup>Optional</sup> <a name="comms_manager_name" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.Initializer.parameter.commsManagerName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_services#comms_manager_name DataOciAnnouncementsServiceServices#comms_manager_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilter">DataOciAnnouncementsServiceServicesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_services#filter DataOciAnnouncementsServiceServices#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_services#id DataOciAnnouncementsServiceServices#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `platform_type`<sup>Optional</sup> <a name="platform_type" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.Initializer.parameter.platformType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_services#platform_type DataOciAnnouncementsServiceServices#platform_type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.resetCommsManagerName">reset_comms_manager_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.resetPlatformType">reset_platform_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciAnnouncementsServiceServicesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilter">DataOciAnnouncementsServiceServicesFilter</a>]]

---

##### `reset_comms_manager_name` <a name="reset_comms_manager_name" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.resetCommsManagerName"></a>

```python
def reset_comms_manager_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_platform_type` <a name="reset_platform_type" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.resetPlatformType"></a>

```python
def reset_platform_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciAnnouncementsServiceServices resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_announcements_service_services

dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_announcements_service_services

dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_announcements_service_services

dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_announcements_service_services

dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciAnnouncementsServiceServices resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciAnnouncementsServiceServices to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciAnnouncementsServiceServices that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_services#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciAnnouncementsServiceServices to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterList">DataOciAnnouncementsServiceServicesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.property.servicesCollection">services_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionList">DataOciAnnouncementsServiceServicesServicesCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.property.commsManagerNameInput">comms_manager_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilter">DataOciAnnouncementsServiceServicesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.property.platformTypeInput">platform_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.property.commsManagerName">comms_manager_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.property.platformType">platform_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.property.filter"></a>

```python
filter: DataOciAnnouncementsServiceServicesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterList">DataOciAnnouncementsServiceServicesFilterList</a>

---

##### `services_collection`<sup>Required</sup> <a name="services_collection" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.property.servicesCollection"></a>

```python
services_collection: DataOciAnnouncementsServiceServicesServicesCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionList">DataOciAnnouncementsServiceServicesServicesCollectionList</a>

---

##### `comms_manager_name_input`<sup>Optional</sup> <a name="comms_manager_name_input" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.property.commsManagerNameInput"></a>

```python
comms_manager_name_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciAnnouncementsServiceServicesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilter">DataOciAnnouncementsServiceServicesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `platform_type_input`<sup>Optional</sup> <a name="platform_type_input" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.property.platformTypeInput"></a>

```python
platform_type_input: str
```

- *Type:* str

---

##### `comms_manager_name`<sup>Required</sup> <a name="comms_manager_name" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.property.commsManagerName"></a>

```python
comms_manager_name: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `platform_type`<sup>Required</sup> <a name="platform_type" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.property.platformType"></a>

```python
platform_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServices.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciAnnouncementsServiceServicesConfig <a name="DataOciAnnouncementsServiceServicesConfig" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_announcements_service_services

dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  comms_manager_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciAnnouncementsServiceServicesFilter]] = None,
  id: str = None,
  platform_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_services#compartment_id DataOciAnnouncementsServiceServices#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesConfig.property.commsManagerName">comms_manager_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_services#comms_manager_name DataOciAnnouncementsServiceServices#comms_manager_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilter">DataOciAnnouncementsServiceServicesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_services#id DataOciAnnouncementsServiceServices#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesConfig.property.platformType">platform_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_services#platform_type DataOciAnnouncementsServiceServices#platform_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_services#compartment_id DataOciAnnouncementsServiceServices#compartment_id}.

---

##### `comms_manager_name`<sup>Optional</sup> <a name="comms_manager_name" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesConfig.property.commsManagerName"></a>

```python
comms_manager_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_services#comms_manager_name DataOciAnnouncementsServiceServices#comms_manager_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciAnnouncementsServiceServicesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilter">DataOciAnnouncementsServiceServicesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_services#filter DataOciAnnouncementsServiceServices#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_services#id DataOciAnnouncementsServiceServices#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `platform_type`<sup>Optional</sup> <a name="platform_type" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesConfig.property.platformType"></a>

```python
platform_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_services#platform_type DataOciAnnouncementsServiceServices#platform_type}.

---

### DataOciAnnouncementsServiceServicesFilter <a name="DataOciAnnouncementsServiceServicesFilter" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_announcements_service_services

dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_services#name DataOciAnnouncementsServiceServices#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_services#values DataOciAnnouncementsServiceServices#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_services#regex DataOciAnnouncementsServiceServices#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_services#name DataOciAnnouncementsServiceServices#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_services#values DataOciAnnouncementsServiceServices#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/announcements_service_services#regex DataOciAnnouncementsServiceServices#regex}.

---

### DataOciAnnouncementsServiceServicesServicesCollection <a name="DataOciAnnouncementsServiceServicesServicesCollection" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_announcements_service_services

dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollection()
```


### DataOciAnnouncementsServiceServicesServicesCollectionItems <a name="DataOciAnnouncementsServiceServicesServicesCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_announcements_service_services

dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItems()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciAnnouncementsServiceServicesFilterList <a name="DataOciAnnouncementsServiceServicesFilterList" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_announcements_service_services

dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciAnnouncementsServiceServicesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilter">DataOciAnnouncementsServiceServicesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciAnnouncementsServiceServicesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilter">DataOciAnnouncementsServiceServicesFilter</a>]]

---


### DataOciAnnouncementsServiceServicesFilterOutputReference <a name="DataOciAnnouncementsServiceServicesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_announcements_service_services

dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilter">DataOciAnnouncementsServiceServicesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciAnnouncementsServiceServicesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesFilter">DataOciAnnouncementsServiceServicesFilter</a>]

---


### DataOciAnnouncementsServiceServicesServicesCollectionItemsList <a name="DataOciAnnouncementsServiceServicesServicesCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_announcements_service_services

dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference <a name="DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_announcements_service_services

dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.property.commsManagerName">comms_manager_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.property.excludedRealms">excluded_realms</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.property.platformType">platform_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.property.previousServiceNames">previous_service_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.property.serviceName">service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.property.shortName">short_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.property.teamName">team_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItems">DataOciAnnouncementsServiceServicesServicesCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comms_manager_name`<sup>Required</sup> <a name="comms_manager_name" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.property.commsManagerName"></a>

```python
comms_manager_name: str
```

- *Type:* str

---

##### `excluded_realms`<sup>Required</sup> <a name="excluded_realms" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.property.excludedRealms"></a>

```python
excluded_realms: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `platform_type`<sup>Required</sup> <a name="platform_type" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.property.platformType"></a>

```python
platform_type: str
```

- *Type:* str

---

##### `previous_service_names`<sup>Required</sup> <a name="previous_service_names" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.property.previousServiceNames"></a>

```python
previous_service_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

---

##### `short_name`<sup>Required</sup> <a name="short_name" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.property.shortName"></a>

```python
short_name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `team_name`<sup>Required</sup> <a name="team_name" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.property.teamName"></a>

```python
team_name: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciAnnouncementsServiceServicesServicesCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItems">DataOciAnnouncementsServiceServicesServicesCollectionItems</a>

---


### DataOciAnnouncementsServiceServicesServicesCollectionList <a name="DataOciAnnouncementsServiceServicesServicesCollectionList" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_announcements_service_services

dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciAnnouncementsServiceServicesServicesCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciAnnouncementsServiceServicesServicesCollectionOutputReference <a name="DataOciAnnouncementsServiceServicesServicesCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_announcements_service_services

dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsList">DataOciAnnouncementsServiceServicesServicesCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollection">DataOciAnnouncementsServiceServicesServicesCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.property.items"></a>

```python
items: DataOciAnnouncementsServiceServicesServicesCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionItemsList">DataOciAnnouncementsServiceServicesServicesCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciAnnouncementsServiceServicesServicesCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAnnouncementsServiceServices.DataOciAnnouncementsServiceServicesServicesCollection">DataOciAnnouncementsServiceServicesServicesCollection</a>

---



