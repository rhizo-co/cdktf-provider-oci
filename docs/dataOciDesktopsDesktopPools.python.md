# `dataOciDesktopsDesktopPools` Submodule <a name="`dataOciDesktopsDesktopPools` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDesktopsDesktopPools <a name="DataOciDesktopsDesktopPools" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pools oci_desktops_desktop_pools}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_desktops_desktop_pools

dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools(
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
  availability_domain: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDesktopsDesktopPoolsFilter]] = None,
  id: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pools#compartment_id DataOciDesktopsDesktopPools#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.Initializer.parameter.availabilityDomain">availability_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pools#availability_domain DataOciDesktopsDesktopPools#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pools#display_name DataOciDesktopsDesktopPools#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilter">DataOciDesktopsDesktopPoolsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pools#id DataOciDesktopsDesktopPools#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pools#state DataOciDesktopsDesktopPools#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pools#compartment_id DataOciDesktopsDesktopPools#compartment_id}.

---

##### `availability_domain`<sup>Optional</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.Initializer.parameter.availabilityDomain"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pools#availability_domain DataOciDesktopsDesktopPools#availability_domain}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pools#display_name DataOciDesktopsDesktopPools#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilter">DataOciDesktopsDesktopPoolsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pools#filter DataOciDesktopsDesktopPools#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pools#id DataOciDesktopsDesktopPools#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pools#state DataOciDesktopsDesktopPools#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.resetAvailabilityDomain">reset_availability_domain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDesktopsDesktopPoolsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilter">DataOciDesktopsDesktopPoolsFilter</a>]]

---

##### `reset_availability_domain` <a name="reset_availability_domain" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.resetAvailabilityDomain"></a>

```python
def reset_availability_domain() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDesktopsDesktopPools resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_desktops_desktop_pools

dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_desktops_desktop_pools

dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_desktops_desktop_pools

dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_desktops_desktop_pools

dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDesktopsDesktopPools resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDesktopsDesktopPools to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDesktopsDesktopPools that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pools#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDesktopsDesktopPools to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.desktopPoolCollection">desktop_pool_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList">DataOciDesktopsDesktopPoolsDesktopPoolCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList">DataOciDesktopsDesktopPoolsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.availabilityDomainInput">availability_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilter">DataOciDesktopsDesktopPoolsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `desktop_pool_collection`<sup>Required</sup> <a name="desktop_pool_collection" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.desktopPoolCollection"></a>

```python
desktop_pool_collection: DataOciDesktopsDesktopPoolsDesktopPoolCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList">DataOciDesktopsDesktopPoolsDesktopPoolCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.filter"></a>

```python
filter: DataOciDesktopsDesktopPoolsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList">DataOciDesktopsDesktopPoolsFilterList</a>

---

##### `availability_domain_input`<sup>Optional</sup> <a name="availability_domain_input" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.availabilityDomainInput"></a>

```python
availability_domain_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDesktopsDesktopPoolsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilter">DataOciDesktopsDesktopPoolsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPools.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDesktopsDesktopPoolsConfig <a name="DataOciDesktopsDesktopPoolsConfig" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_desktops_desktop_pools

dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  availability_domain: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDesktopsDesktopPoolsFilter]] = None,
  id: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pools#compartment_id DataOciDesktopsDesktopPools#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pools#availability_domain DataOciDesktopsDesktopPools#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pools#display_name DataOciDesktopsDesktopPools#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilter">DataOciDesktopsDesktopPoolsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pools#id DataOciDesktopsDesktopPools#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pools#state DataOciDesktopsDesktopPools#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pools#compartment_id DataOciDesktopsDesktopPools#compartment_id}.

---

##### `availability_domain`<sup>Optional</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pools#availability_domain DataOciDesktopsDesktopPools#availability_domain}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pools#display_name DataOciDesktopsDesktopPools#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDesktopsDesktopPoolsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilter">DataOciDesktopsDesktopPoolsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pools#filter DataOciDesktopsDesktopPools#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pools#id DataOciDesktopsDesktopPools#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pools#state DataOciDesktopsDesktopPools#state}.

---

### DataOciDesktopsDesktopPoolsDesktopPoolCollection <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollection" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_desktops_desktop_pools

dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollection()
```


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItems <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_desktops_desktop_pools

dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItems()
```


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicy <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicy" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_desktops_desktop_pools

dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicy()
```


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartSchedule <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartSchedule" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartSchedule"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartSchedule.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_desktops_desktop_pools

dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartSchedule()
```


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopSchedule <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopSchedule" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopSchedule"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopSchedule.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_desktops_desktop_pools

dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopSchedule()
```


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicy <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicy" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_desktops_desktop_pools

dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicy()
```


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImage <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImage" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImage"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImage.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_desktops_desktop_pools

dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImage()
```


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfiguration <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfiguration" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfiguration.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_desktops_desktop_pools

dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfiguration()
```


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetails <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetails" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_desktops_desktop_pools

dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetails()
```


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActions <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActions" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_desktops_desktop_pools

dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActions()
```


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnect <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnect" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnect"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnect.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_desktops_desktop_pools

dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnect()
```


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivity <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivity" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivity"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivity.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_desktops_desktop_pools

dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivity()
```


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfig <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfig" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_desktops_desktop_pools

dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfig()
```


### DataOciDesktopsDesktopPoolsFilter <a name="DataOciDesktopsDesktopPoolsFilter" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_desktops_desktop_pools

dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pools#name DataOciDesktopsDesktopPools#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pools#values DataOciDesktopsDesktopPools#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pools#regex DataOciDesktopsDesktopPools#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pools#name DataOciDesktopsDesktopPools#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pools#values DataOciDesktopsDesktopPools#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pools#regex DataOciDesktopsDesktopPools#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_desktops_desktop_pools

dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_desktops_desktop_pools

dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.property.startSchedule">start_schedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.property.stopSchedule">stop_schedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicy">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `start_schedule`<sup>Required</sup> <a name="start_schedule" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.property.startSchedule"></a>

```python
start_schedule: DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList</a>

---

##### `stop_schedule`<sup>Required</sup> <a name="stop_schedule" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.property.stopSchedule"></a>

```python
stop_schedule: DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicy">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicy</a>

---


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_desktops_desktop_pools

dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_desktops_desktop_pools

dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.property.cronExpression">cron_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.property.timezone">timezone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartSchedule">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartSchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cron_expression`<sup>Required</sup> <a name="cron_expression" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.property.cronExpression"></a>

```python
cron_expression: str
```

- *Type:* str

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartScheduleOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartSchedule
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartSchedule">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStartSchedule</a>

---


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_desktops_desktop_pools

dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_desktops_desktop_pools

dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.property.cronExpression">cron_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.property.timezone">timezone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopSchedule">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopSchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cron_expression`<sup>Required</sup> <a name="cron_expression" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.property.cronExpression"></a>

```python
cron_expression: str
```

- *Type:* str

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopScheduleOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopSchedule
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopSchedule">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyStopSchedule</a>

---


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_desktops_desktop_pools

dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_desktops_desktop_pools

dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.property.audioMode">audio_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.property.cdmMode">cdm_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.property.clipboardMode">clipboard_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.property.isDisplayEnabled">is_display_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.property.isKeyboardEnabled">is_keyboard_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.property.isPointerEnabled">is_pointer_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.property.isPrintingEnabled">is_printing_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicy">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `audio_mode`<sup>Required</sup> <a name="audio_mode" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.property.audioMode"></a>

```python
audio_mode: str
```

- *Type:* str

---

##### `cdm_mode`<sup>Required</sup> <a name="cdm_mode" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.property.cdmMode"></a>

```python
cdm_mode: str
```

- *Type:* str

---

##### `clipboard_mode`<sup>Required</sup> <a name="clipboard_mode" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.property.clipboardMode"></a>

```python
clipboard_mode: str
```

- *Type:* str

---

##### `is_display_enabled`<sup>Required</sup> <a name="is_display_enabled" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.property.isDisplayEnabled"></a>

```python
is_display_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_keyboard_enabled`<sup>Required</sup> <a name="is_keyboard_enabled" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.property.isKeyboardEnabled"></a>

```python
is_keyboard_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_pointer_enabled`<sup>Required</sup> <a name="is_pointer_enabled" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.property.isPointerEnabled"></a>

```python
is_pointer_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_printing_enabled`<sup>Required</sup> <a name="is_printing_enabled" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.property.isPrintingEnabled"></a>

```python
is_printing_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicy">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicy</a>

---


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_desktops_desktop_pools

dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_desktops_desktop_pools

dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.property.imageId">image_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.property.imageName">image_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.property.operatingSystem">operating_system</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImage">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `image_id`<sup>Required</sup> <a name="image_id" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.property.imageId"></a>

```python
image_id: str
```

- *Type:* str

---

##### `image_name`<sup>Required</sup> <a name="image_name" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.property.imageName"></a>

```python
image_name: str
```

- *Type:* str

---

##### `operating_system`<sup>Required</sup> <a name="operating_system" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.property.operatingSystem"></a>

```python
operating_system: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImage
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImage">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImage</a>

---


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_desktops_desktop_pools

dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_desktops_desktop_pools

dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_desktops_desktop_pools

dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.property.vcnId">vcn_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfiguration">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `vcn_id`<sup>Required</sup> <a name="vcn_id" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.property.vcnId"></a>

```python
vcn_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfiguration">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfiguration</a>

---


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_desktops_desktop_pools

dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.activeDesktops">active_desktops</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.arePrivilegedUsers">are_privileged_users</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.availabilityPolicy">availability_policy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.contactDetails">contact_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.devicePolicy">device_policy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.image">image</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.isStorageEnabled">is_storage_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.maximumSize">maximum_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.networkConfiguration">network_configuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.privateAccessDetails">private_access_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.sessionLifecycleActions">session_lifecycle_actions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.shapeConfig">shape_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.shapeName">shape_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.standbySize">standby_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.storageBackupPolicyId">storage_backup_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.storageSizeInGbs">storage_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.timeStartScheduled">time_start_scheduled</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.timeStopScheduled">time_stop_scheduled</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.useDedicatedVmHost">use_dedicated_vm_host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItems">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `active_desktops`<sup>Required</sup> <a name="active_desktops" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.activeDesktops"></a>

```python
active_desktops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `are_privileged_users`<sup>Required</sup> <a name="are_privileged_users" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.arePrivilegedUsers"></a>

```python
are_privileged_users: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `availability_policy`<sup>Required</sup> <a name="availability_policy" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.availabilityPolicy"></a>

```python
availability_policy: DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsAvailabilityPolicyList</a>

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `contact_details`<sup>Required</sup> <a name="contact_details" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.contactDetails"></a>

```python
contact_details: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `device_policy`<sup>Required</sup> <a name="device_policy" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.devicePolicy"></a>

```python
device_policy: DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsDevicePolicyList</a>

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `image`<sup>Required</sup> <a name="image" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.image"></a>

```python
image: DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsImageList</a>

---

##### `is_storage_enabled`<sup>Required</sup> <a name="is_storage_enabled" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.isStorageEnabled"></a>

```python
is_storage_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `maximum_size`<sup>Required</sup> <a name="maximum_size" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.maximumSize"></a>

```python
maximum_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `network_configuration`<sup>Required</sup> <a name="network_configuration" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.networkConfiguration"></a>

```python
network_configuration: DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsNetworkConfigurationList</a>

---

##### `nsg_ids`<sup>Required</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.nsgIds"></a>

```python
nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `private_access_details`<sup>Required</sup> <a name="private_access_details" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.privateAccessDetails"></a>

```python
private_access_details: DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList</a>

---

##### `session_lifecycle_actions`<sup>Required</sup> <a name="session_lifecycle_actions" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.sessionLifecycleActions"></a>

```python
session_lifecycle_actions: DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList</a>

---

##### `shape_config`<sup>Required</sup> <a name="shape_config" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.shapeConfig"></a>

```python
shape_config: DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList</a>

---

##### `shape_name`<sup>Required</sup> <a name="shape_name" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.shapeName"></a>

```python
shape_name: str
```

- *Type:* str

---

##### `standby_size`<sup>Required</sup> <a name="standby_size" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.standbySize"></a>

```python
standby_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `storage_backup_policy_id`<sup>Required</sup> <a name="storage_backup_policy_id" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.storageBackupPolicyId"></a>

```python
storage_backup_policy_id: str
```

- *Type:* str

---

##### `storage_size_in_gbs`<sup>Required</sup> <a name="storage_size_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.storageSizeInGbs"></a>

```python
storage_size_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_start_scheduled`<sup>Required</sup> <a name="time_start_scheduled" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.timeStartScheduled"></a>

```python
time_start_scheduled: str
```

- *Type:* str

---

##### `time_stop_scheduled`<sup>Required</sup> <a name="time_stop_scheduled" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.timeStopScheduled"></a>

```python
time_stop_scheduled: str
```

- *Type:* str

---

##### `use_dedicated_vm_host`<sup>Required</sup> <a name="use_dedicated_vm_host" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.useDedicatedVmHost"></a>

```python
use_dedicated_vm_host: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDesktopsDesktopPoolsDesktopPoolCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItems">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItems</a>

---


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_desktops_desktop_pools

dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_desktops_desktop_pools

dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.property.endpointFqdn">endpoint_fqdn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.property.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.property.privateIp">private_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.property.vcnId">vcn_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetails">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `endpoint_fqdn`<sup>Required</sup> <a name="endpoint_fqdn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.property.endpointFqdn"></a>

```python
endpoint_fqdn: str
```

- *Type:* str

---

##### `nsg_ids`<sup>Required</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.property.nsgIds"></a>

```python
nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `private_ip`<sup>Required</sup> <a name="private_ip" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.property.privateIp"></a>

```python
private_ip: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `vcn_id`<sup>Required</sup> <a name="vcn_id" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.property.vcnId"></a>

```python
vcn_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetails">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsPrivateAccessDetails</a>

---


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_desktops_desktop_pools

dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_desktops_desktop_pools

dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.property.gracePeriodInMinutes">grace_period_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnect">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnect</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `grace_period_in_minutes`<sup>Required</sup> <a name="grace_period_in_minutes" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.property.gracePeriodInMinutes"></a>

```python
grace_period_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnect
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnect">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnect</a>

---


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_desktops_desktop_pools

dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_desktops_desktop_pools

dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.property.gracePeriodInMinutes">grace_period_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivity">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `grace_period_in_minutes`<sup>Required</sup> <a name="grace_period_in_minutes" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.property.gracePeriodInMinutes"></a>

```python
grace_period_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivity
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivity">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivity</a>

---


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_desktops_desktop_pools

dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_desktops_desktop_pools

dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.property.disconnect">disconnect</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.property.inactivity">inactivity</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActions">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disconnect`<sup>Required</sup> <a name="disconnect" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.property.disconnect"></a>

```python
disconnect: DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsDisconnectList</a>

---

##### `inactivity`<sup>Required</sup> <a name="inactivity" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.property.inactivity"></a>

```python
inactivity: DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsInactivityList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActionsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActions">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsSessionLifecycleActions</a>

---


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_desktops_desktop_pools

dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_desktops_desktop_pools

dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.property.baselineOcpuUtilization">baseline_ocpu_utilization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.property.memoryInGbs">memory_in_gbs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.property.ocpus">ocpus</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfig">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `baseline_ocpu_utilization`<sup>Required</sup> <a name="baseline_ocpu_utilization" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.property.baselineOcpuUtilization"></a>

```python
baseline_ocpu_utilization: str
```

- *Type:* str

---

##### `memory_in_gbs`<sup>Required</sup> <a name="memory_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.property.memoryInGbs"></a>

```python
memory_in_gbs: str
```

- *Type:* str

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.property.ocpus"></a>

```python
ocpus: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfig">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsShapeConfig</a>

---


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionList <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_desktops_desktop_pools

dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference <a name="DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_desktops_desktop_pools

dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollection">DataOciDesktopsDesktopPoolsDesktopPoolCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.property.items"></a>

```python
items: DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList">DataOciDesktopsDesktopPoolsDesktopPoolCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDesktopsDesktopPoolsDesktopPoolCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsDesktopPoolCollection">DataOciDesktopsDesktopPoolsDesktopPoolCollection</a>

---


### DataOciDesktopsDesktopPoolsFilterList <a name="DataOciDesktopsDesktopPoolsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_desktops_desktop_pools

dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDesktopsDesktopPoolsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilter">DataOciDesktopsDesktopPoolsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDesktopsDesktopPoolsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilter">DataOciDesktopsDesktopPoolsFilter</a>]]

---


### DataOciDesktopsDesktopPoolsFilterOutputReference <a name="DataOciDesktopsDesktopPoolsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_desktops_desktop_pools

dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilter">DataOciDesktopsDesktopPoolsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDesktopsDesktopPoolsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPools.DataOciDesktopsDesktopPoolsFilter">DataOciDesktopsDesktopPoolsFilter</a>]

---



