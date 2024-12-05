# `dataOciDesktopsDesktopPoolVolumes` Submodule <a name="`dataOciDesktopsDesktopPoolVolumes` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDesktopsDesktopPoolVolumes <a name="DataOciDesktopsDesktopPoolVolumes" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_volumes oci_desktops_desktop_pool_volumes}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_desktops_desktop_pool_volumes

dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes(
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
  desktop_pool_id: str,
  availability_domain: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDesktopsDesktopPoolVolumesFilter]] = None,
  id: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_volumes#compartment_id DataOciDesktopsDesktopPoolVolumes#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.Initializer.parameter.desktopPoolId">desktop_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_volumes#desktop_pool_id DataOciDesktopsDesktopPoolVolumes#desktop_pool_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.Initializer.parameter.availabilityDomain">availability_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_volumes#availability_domain DataOciDesktopsDesktopPoolVolumes#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_volumes#display_name DataOciDesktopsDesktopPoolVolumes#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilter">DataOciDesktopsDesktopPoolVolumesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_volumes#id DataOciDesktopsDesktopPoolVolumes#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_volumes#state DataOciDesktopsDesktopPoolVolumes#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_volumes#compartment_id DataOciDesktopsDesktopPoolVolumes#compartment_id}.

---

##### `desktop_pool_id`<sup>Required</sup> <a name="desktop_pool_id" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.Initializer.parameter.desktopPoolId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_volumes#desktop_pool_id DataOciDesktopsDesktopPoolVolumes#desktop_pool_id}.

---

##### `availability_domain`<sup>Optional</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.Initializer.parameter.availabilityDomain"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_volumes#availability_domain DataOciDesktopsDesktopPoolVolumes#availability_domain}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_volumes#display_name DataOciDesktopsDesktopPoolVolumes#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilter">DataOciDesktopsDesktopPoolVolumesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_volumes#filter DataOciDesktopsDesktopPoolVolumes#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_volumes#id DataOciDesktopsDesktopPoolVolumes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_volumes#state DataOciDesktopsDesktopPoolVolumes#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.resetAvailabilityDomain">reset_availability_domain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDesktopsDesktopPoolVolumesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilter">DataOciDesktopsDesktopPoolVolumesFilter</a>]]

---

##### `reset_availability_domain` <a name="reset_availability_domain" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.resetAvailabilityDomain"></a>

```python
def reset_availability_domain() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDesktopsDesktopPoolVolumes resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_desktops_desktop_pool_volumes

dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_desktops_desktop_pool_volumes

dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_desktops_desktop_pool_volumes

dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_desktops_desktop_pool_volumes

dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDesktopsDesktopPoolVolumes resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDesktopsDesktopPoolVolumes to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDesktopsDesktopPoolVolumes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_volumes#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDesktopsDesktopPoolVolumes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.desktopPoolVolumeCollection">desktop_pool_volume_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionList">DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterList">DataOciDesktopsDesktopPoolVolumesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.availabilityDomainInput">availability_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.desktopPoolIdInput">desktop_pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilter">DataOciDesktopsDesktopPoolVolumesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.desktopPoolId">desktop_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `desktop_pool_volume_collection`<sup>Required</sup> <a name="desktop_pool_volume_collection" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.desktopPoolVolumeCollection"></a>

```python
desktop_pool_volume_collection: DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionList">DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.filter"></a>

```python
filter: DataOciDesktopsDesktopPoolVolumesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterList">DataOciDesktopsDesktopPoolVolumesFilterList</a>

---

##### `availability_domain_input`<sup>Optional</sup> <a name="availability_domain_input" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.availabilityDomainInput"></a>

```python
availability_domain_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `desktop_pool_id_input`<sup>Optional</sup> <a name="desktop_pool_id_input" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.desktopPoolIdInput"></a>

```python
desktop_pool_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDesktopsDesktopPoolVolumesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilter">DataOciDesktopsDesktopPoolVolumesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `desktop_pool_id`<sup>Required</sup> <a name="desktop_pool_id" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.desktopPoolId"></a>

```python
desktop_pool_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumes.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDesktopsDesktopPoolVolumesConfig <a name="DataOciDesktopsDesktopPoolVolumesConfig" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_desktops_desktop_pool_volumes

dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  desktop_pool_id: str,
  availability_domain: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDesktopsDesktopPoolVolumesFilter]] = None,
  id: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_volumes#compartment_id DataOciDesktopsDesktopPoolVolumes#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesConfig.property.desktopPoolId">desktop_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_volumes#desktop_pool_id DataOciDesktopsDesktopPoolVolumes#desktop_pool_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesConfig.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_volumes#availability_domain DataOciDesktopsDesktopPoolVolumes#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_volumes#display_name DataOciDesktopsDesktopPoolVolumes#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilter">DataOciDesktopsDesktopPoolVolumesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_volumes#id DataOciDesktopsDesktopPoolVolumes#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_volumes#state DataOciDesktopsDesktopPoolVolumes#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_volumes#compartment_id DataOciDesktopsDesktopPoolVolumes#compartment_id}.

---

##### `desktop_pool_id`<sup>Required</sup> <a name="desktop_pool_id" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesConfig.property.desktopPoolId"></a>

```python
desktop_pool_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_volumes#desktop_pool_id DataOciDesktopsDesktopPoolVolumes#desktop_pool_id}.

---

##### `availability_domain`<sup>Optional</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesConfig.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_volumes#availability_domain DataOciDesktopsDesktopPoolVolumes#availability_domain}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_volumes#display_name DataOciDesktopsDesktopPoolVolumes#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDesktopsDesktopPoolVolumesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilter">DataOciDesktopsDesktopPoolVolumesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_volumes#filter DataOciDesktopsDesktopPoolVolumes#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_volumes#id DataOciDesktopsDesktopPoolVolumes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_volumes#state DataOciDesktopsDesktopPoolVolumes#state}.

---

### DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollection <a name="DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollection" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_desktops_desktop_pool_volumes

dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollection()
```


### DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItems <a name="DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_desktops_desktop_pool_volumes

dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItems()
```


### DataOciDesktopsDesktopPoolVolumesFilter <a name="DataOciDesktopsDesktopPoolVolumesFilter" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_desktops_desktop_pool_volumes

dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_volumes#name DataOciDesktopsDesktopPoolVolumes#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_volumes#values DataOciDesktopsDesktopPoolVolumes#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_volumes#regex DataOciDesktopsDesktopPoolVolumes#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_volumes#name DataOciDesktopsDesktopPoolVolumes#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_volumes#values DataOciDesktopsDesktopPoolVolumes#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool_volumes#regex DataOciDesktopsDesktopPoolVolumes#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsList <a name="DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_desktops_desktop_pool_volumes

dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference <a name="DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_desktops_desktop_pool_volumes

dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.property.poolId">pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.property.userName">user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItems">DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `pool_id`<sup>Required</sup> <a name="pool_id" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.property.poolId"></a>

```python
pool_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.property.userName"></a>

```python
user_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItems">DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItems</a>

---


### DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionList <a name="DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_desktops_desktop_pool_volumes

dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference <a name="DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_desktops_desktop_pool_volumes

dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsList">DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollection">DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.property.items"></a>

```python
items: DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsList">DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollection">DataOciDesktopsDesktopPoolVolumesDesktopPoolVolumeCollection</a>

---


### DataOciDesktopsDesktopPoolVolumesFilterList <a name="DataOciDesktopsDesktopPoolVolumesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_desktops_desktop_pool_volumes

dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDesktopsDesktopPoolVolumesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilter">DataOciDesktopsDesktopPoolVolumesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDesktopsDesktopPoolVolumesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilter">DataOciDesktopsDesktopPoolVolumesFilter</a>]]

---


### DataOciDesktopsDesktopPoolVolumesFilterOutputReference <a name="DataOciDesktopsDesktopPoolVolumesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_desktops_desktop_pool_volumes

dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilter">DataOciDesktopsDesktopPoolVolumesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDesktopsDesktopPoolVolumesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPoolVolumes.DataOciDesktopsDesktopPoolVolumesFilter">DataOciDesktopsDesktopPoolVolumesFilter</a>]

---



