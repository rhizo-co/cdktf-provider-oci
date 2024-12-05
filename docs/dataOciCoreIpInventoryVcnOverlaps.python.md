# `dataOciCoreIpInventoryVcnOverlaps` Submodule <a name="`dataOciCoreIpInventoryVcnOverlaps` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreIpInventoryVcnOverlaps <a name="DataOciCoreIpInventoryVcnOverlaps" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_vcn_overlaps oci_core_ip_inventory_vcn_overlaps}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_ip_inventory_vcn_overlaps

dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_list: typing.List[str],
  region_list: typing.List[str],
  vcn_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciCoreIpInventoryVcnOverlapsFilter]] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.Initializer.parameter.compartmentList">compartment_list</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_vcn_overlaps#compartment_list DataOciCoreIpInventoryVcnOverlaps#compartment_list}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.Initializer.parameter.regionList">region_list</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_vcn_overlaps#region_list DataOciCoreIpInventoryVcnOverlaps#region_list}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.Initializer.parameter.vcnId">vcn_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_vcn_overlaps#vcn_id DataOciCoreIpInventoryVcnOverlaps#vcn_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilter">DataOciCoreIpInventoryVcnOverlapsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_vcn_overlaps#id DataOciCoreIpInventoryVcnOverlaps#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_list`<sup>Required</sup> <a name="compartment_list" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.Initializer.parameter.compartmentList"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_vcn_overlaps#compartment_list DataOciCoreIpInventoryVcnOverlaps#compartment_list}.

---

##### `region_list`<sup>Required</sup> <a name="region_list" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.Initializer.parameter.regionList"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_vcn_overlaps#region_list DataOciCoreIpInventoryVcnOverlaps#region_list}.

---

##### `vcn_id`<sup>Required</sup> <a name="vcn_id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.Initializer.parameter.vcnId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_vcn_overlaps#vcn_id DataOciCoreIpInventoryVcnOverlaps#vcn_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilter">DataOciCoreIpInventoryVcnOverlapsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_vcn_overlaps#filter DataOciCoreIpInventoryVcnOverlaps#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_vcn_overlaps#id DataOciCoreIpInventoryVcnOverlaps#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciCoreIpInventoryVcnOverlapsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilter">DataOciCoreIpInventoryVcnOverlapsFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciCoreIpInventoryVcnOverlaps resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_ip_inventory_vcn_overlaps

dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_ip_inventory_vcn_overlaps

dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_ip_inventory_vcn_overlaps

dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_ip_inventory_vcn_overlaps

dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciCoreIpInventoryVcnOverlaps resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciCoreIpInventoryVcnOverlaps to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciCoreIpInventoryVcnOverlaps that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_vcn_overlaps#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreIpInventoryVcnOverlaps to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList">DataOciCoreIpInventoryVcnOverlapsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.ipInventoryVcnOverlapSummary">ip_inventory_vcn_overlap_summary</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList">DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.lastUpdatedTimestamp">last_updated_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.overlapCount">overlap_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.compartmentListInput">compartment_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilter">DataOciCoreIpInventoryVcnOverlapsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.regionListInput">region_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.vcnIdInput">vcn_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.compartmentList">compartment_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.regionList">region_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.vcnId">vcn_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.filter"></a>

```python
filter: DataOciCoreIpInventoryVcnOverlapsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList">DataOciCoreIpInventoryVcnOverlapsFilterList</a>

---

##### `ip_inventory_vcn_overlap_summary`<sup>Required</sup> <a name="ip_inventory_vcn_overlap_summary" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.ipInventoryVcnOverlapSummary"></a>

```python
ip_inventory_vcn_overlap_summary: DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList">DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList</a>

---

##### `last_updated_timestamp`<sup>Required</sup> <a name="last_updated_timestamp" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.lastUpdatedTimestamp"></a>

```python
last_updated_timestamp: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `overlap_count`<sup>Required</sup> <a name="overlap_count" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.overlapCount"></a>

```python
overlap_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `compartment_list_input`<sup>Optional</sup> <a name="compartment_list_input" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.compartmentListInput"></a>

```python
compartment_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciCoreIpInventoryVcnOverlapsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilter">DataOciCoreIpInventoryVcnOverlapsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `region_list_input`<sup>Optional</sup> <a name="region_list_input" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.regionListInput"></a>

```python
region_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vcn_id_input`<sup>Optional</sup> <a name="vcn_id_input" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.vcnIdInput"></a>

```python
vcn_id_input: str
```

- *Type:* str

---

##### `compartment_list`<sup>Required</sup> <a name="compartment_list" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.compartmentList"></a>

```python
compartment_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `region_list`<sup>Required</sup> <a name="region_list" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.regionList"></a>

```python
region_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vcn_id`<sup>Required</sup> <a name="vcn_id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.vcnId"></a>

```python
vcn_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlaps.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreIpInventoryVcnOverlapsConfig <a name="DataOciCoreIpInventoryVcnOverlapsConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_ip_inventory_vcn_overlaps

dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_list: typing.List[str],
  region_list: typing.List[str],
  vcn_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciCoreIpInventoryVcnOverlapsFilter]] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.compartmentList">compartment_list</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_vcn_overlaps#compartment_list DataOciCoreIpInventoryVcnOverlaps#compartment_list}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.regionList">region_list</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_vcn_overlaps#region_list DataOciCoreIpInventoryVcnOverlaps#region_list}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.vcnId">vcn_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_vcn_overlaps#vcn_id DataOciCoreIpInventoryVcnOverlaps#vcn_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilter">DataOciCoreIpInventoryVcnOverlapsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_vcn_overlaps#id DataOciCoreIpInventoryVcnOverlaps#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_list`<sup>Required</sup> <a name="compartment_list" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.compartmentList"></a>

```python
compartment_list: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_vcn_overlaps#compartment_list DataOciCoreIpInventoryVcnOverlaps#compartment_list}.

---

##### `region_list`<sup>Required</sup> <a name="region_list" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.regionList"></a>

```python
region_list: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_vcn_overlaps#region_list DataOciCoreIpInventoryVcnOverlaps#region_list}.

---

##### `vcn_id`<sup>Required</sup> <a name="vcn_id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.vcnId"></a>

```python
vcn_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_vcn_overlaps#vcn_id DataOciCoreIpInventoryVcnOverlaps#vcn_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciCoreIpInventoryVcnOverlapsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilter">DataOciCoreIpInventoryVcnOverlapsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_vcn_overlaps#filter DataOciCoreIpInventoryVcnOverlaps#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_vcn_overlaps#id DataOciCoreIpInventoryVcnOverlaps#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciCoreIpInventoryVcnOverlapsFilter <a name="DataOciCoreIpInventoryVcnOverlapsFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_ip_inventory_vcn_overlaps

dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_vcn_overlaps#name DataOciCoreIpInventoryVcnOverlaps#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_vcn_overlaps#values DataOciCoreIpInventoryVcnOverlaps#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_vcn_overlaps#regex DataOciCoreIpInventoryVcnOverlaps#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_vcn_overlaps#name DataOciCoreIpInventoryVcnOverlaps#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_vcn_overlaps#values DataOciCoreIpInventoryVcnOverlaps#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_vcn_overlaps#regex DataOciCoreIpInventoryVcnOverlaps#regex}.

---

### DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummary <a name="DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummary" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummary"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummary.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_ip_inventory_vcn_overlaps

dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummary()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreIpInventoryVcnOverlapsFilterList <a name="DataOciCoreIpInventoryVcnOverlapsFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_ip_inventory_vcn_overlaps

dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreIpInventoryVcnOverlapsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilter">DataOciCoreIpInventoryVcnOverlapsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciCoreIpInventoryVcnOverlapsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilter">DataOciCoreIpInventoryVcnOverlapsFilter</a>]]

---


### DataOciCoreIpInventoryVcnOverlapsFilterOutputReference <a name="DataOciCoreIpInventoryVcnOverlapsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_ip_inventory_vcn_overlaps

dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilter">DataOciCoreIpInventoryVcnOverlapsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciCoreIpInventoryVcnOverlapsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsFilter">DataOciCoreIpInventoryVcnOverlapsFilter</a>]

---


### DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList <a name="DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_ip_inventory_vcn_overlaps

dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference <a name="DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_ip_inventory_vcn_overlaps

dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.property.cidr">cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.property.overlappingCidr">overlapping_cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.property.overlappingVcnId">overlapping_vcn_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.property.overlappingVcnName">overlapping_vcn_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummary">DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummary</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.property.cidr"></a>

```python
cidr: str
```

- *Type:* str

---

##### `overlapping_cidr`<sup>Required</sup> <a name="overlapping_cidr" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.property.overlappingCidr"></a>

```python
overlapping_cidr: str
```

- *Type:* str

---

##### `overlapping_vcn_id`<sup>Required</sup> <a name="overlapping_vcn_id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.property.overlappingVcnId"></a>

```python
overlapping_vcn_id: str
```

- *Type:* str

---

##### `overlapping_vcn_name`<sup>Required</sup> <a name="overlapping_vcn_name" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.property.overlappingVcnName"></a>

```python
overlapping_vcn_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummaryOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummary
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventoryVcnOverlaps.DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummary">DataOciCoreIpInventoryVcnOverlapsIpInventoryVcnOverlapSummary</a>

---



