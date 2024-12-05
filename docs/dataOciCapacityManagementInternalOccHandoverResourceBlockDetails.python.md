# `dataOciCapacityManagementInternalOccHandoverResourceBlockDetails` Submodule <a name="`dataOciCapacityManagementInternalOccHandoverResourceBlockDetails` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCapacityManagementInternalOccHandoverResourceBlockDetails <a name="DataOciCapacityManagementInternalOccHandoverResourceBlockDetails" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_block_details oci_capacity_management_internal_occ_handover_resource_block_details}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_internal_occ_handover_resource_block_details

dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  occ_handover_resource_block_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilter]] = None,
  host_id: str = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.Initializer.parameter.occHandoverResourceBlockId">occ_handover_resource_block_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_block_details#occ_handover_resource_block_id DataOciCapacityManagementInternalOccHandoverResourceBlockDetails#occ_handover_resource_block_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilter">DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.Initializer.parameter.hostId">host_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_block_details#host_id DataOciCapacityManagementInternalOccHandoverResourceBlockDetails#host_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_block_details#id DataOciCapacityManagementInternalOccHandoverResourceBlockDetails#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `occ_handover_resource_block_id`<sup>Required</sup> <a name="occ_handover_resource_block_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.Initializer.parameter.occHandoverResourceBlockId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_block_details#occ_handover_resource_block_id DataOciCapacityManagementInternalOccHandoverResourceBlockDetails#occ_handover_resource_block_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilter">DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_block_details#filter DataOciCapacityManagementInternalOccHandoverResourceBlockDetails#filter}

---

##### `host_id`<sup>Optional</sup> <a name="host_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.Initializer.parameter.hostId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_block_details#host_id DataOciCapacityManagementInternalOccHandoverResourceBlockDetails#host_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_block_details#id DataOciCapacityManagementInternalOccHandoverResourceBlockDetails#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.resetHostId">reset_host_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilter">DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_host_id` <a name="reset_host_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.resetHostId"></a>

```python
def reset_host_id() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciCapacityManagementInternalOccHandoverResourceBlockDetails resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_internal_occ_handover_resource_block_details

dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_internal_occ_handover_resource_block_details

dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_internal_occ_handover_resource_block_details

dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_internal_occ_handover_resource_block_details

dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciCapacityManagementInternalOccHandoverResourceBlockDetails resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciCapacityManagementInternalOccHandoverResourceBlockDetails to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciCapacityManagementInternalOccHandoverResourceBlockDetails that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_block_details#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCapacityManagementInternalOccHandoverResourceBlockDetails to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterList">DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.property.occHandoverResourceBlockDetailCollection">occ_handover_resource_block_detail_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList">DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilter">DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.property.hostIdInput">host_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.property.occHandoverResourceBlockIdInput">occ_handover_resource_block_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.property.hostId">host_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.property.occHandoverResourceBlockId">occ_handover_resource_block_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.property.filter"></a>

```python
filter: DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterList">DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterList</a>

---

##### `occ_handover_resource_block_detail_collection`<sup>Required</sup> <a name="occ_handover_resource_block_detail_collection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.property.occHandoverResourceBlockDetailCollection"></a>

```python
occ_handover_resource_block_detail_collection: DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList">DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilter">DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilter</a>]]

---

##### `host_id_input`<sup>Optional</sup> <a name="host_id_input" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.property.hostIdInput"></a>

```python
host_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `occ_handover_resource_block_id_input`<sup>Optional</sup> <a name="occ_handover_resource_block_id_input" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.property.occHandoverResourceBlockIdInput"></a>

```python
occ_handover_resource_block_id_input: str
```

- *Type:* str

---

##### `host_id`<sup>Required</sup> <a name="host_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.property.hostId"></a>

```python
host_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `occ_handover_resource_block_id`<sup>Required</sup> <a name="occ_handover_resource_block_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.property.occHandoverResourceBlockId"></a>

```python
occ_handover_resource_block_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetails.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsConfig <a name="DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsConfig" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_internal_occ_handover_resource_block_details

dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  occ_handover_resource_block_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilter]] = None,
  host_id: str = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsConfig.property.occHandoverResourceBlockId">occ_handover_resource_block_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_block_details#occ_handover_resource_block_id DataOciCapacityManagementInternalOccHandoverResourceBlockDetails#occ_handover_resource_block_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilter">DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsConfig.property.hostId">host_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_block_details#host_id DataOciCapacityManagementInternalOccHandoverResourceBlockDetails#host_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_block_details#id DataOciCapacityManagementInternalOccHandoverResourceBlockDetails#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `occ_handover_resource_block_id`<sup>Required</sup> <a name="occ_handover_resource_block_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsConfig.property.occHandoverResourceBlockId"></a>

```python
occ_handover_resource_block_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_block_details#occ_handover_resource_block_id DataOciCapacityManagementInternalOccHandoverResourceBlockDetails#occ_handover_resource_block_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilter">DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_block_details#filter DataOciCapacityManagementInternalOccHandoverResourceBlockDetails#filter}

---

##### `host_id`<sup>Optional</sup> <a name="host_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsConfig.property.hostId"></a>

```python
host_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_block_details#host_id DataOciCapacityManagementInternalOccHandoverResourceBlockDetails#host_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_block_details#id DataOciCapacityManagementInternalOccHandoverResourceBlockDetails#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilter <a name="DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_internal_occ_handover_resource_block_details

dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_block_details#name DataOciCapacityManagementInternalOccHandoverResourceBlockDetails#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_block_details#values DataOciCapacityManagementInternalOccHandoverResourceBlockDetails#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_block_details#regex DataOciCapacityManagementInternalOccHandoverResourceBlockDetails#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_block_details#name DataOciCapacityManagementInternalOccHandoverResourceBlockDetails#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_block_details#values DataOciCapacityManagementInternalOccHandoverResourceBlockDetails#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_internal_occ_handover_resource_block_details#regex DataOciCapacityManagementInternalOccHandoverResourceBlockDetails#regex}.

---

### DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollection <a name="DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_internal_occ_handover_resource_block_details

dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollection()
```


### DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItems <a name="DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_internal_occ_handover_resource_block_details

dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItems()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterList <a name="DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_internal_occ_handover_resource_block_details

dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilter">DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilter">DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilter</a>]]

---


### DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterOutputReference <a name="DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_internal_occ_handover_resource_block_details

dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilter">DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilter">DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsFilter</a>]

---


### DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList <a name="DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_internal_occ_handover_resource_block_details

dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference <a name="DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_internal_occ_handover_resource_block_details

dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.property.details">details</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.property.occResourceHandoverBlockId">occ_resource_handover_block_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItems">DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `details`<sup>Required</sup> <a name="details" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.property.details"></a>

```python
details: StringMap
```

- *Type:* cdktf.StringMap

---

##### `occ_resource_handover_block_id`<sup>Required</sup> <a name="occ_resource_handover_block_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.property.occResourceHandoverBlockId"></a>

```python
occ_resource_handover_block_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItems">DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItems</a>

---


### DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList <a name="DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_internal_occ_handover_resource_block_details

dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference <a name="DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_internal_occ_handover_resource_block_details

dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList">DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollection">DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.property.items"></a>

```python
items: DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList">DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementInternalOccHandoverResourceBlockDetails.DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollection">DataOciCapacityManagementInternalOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollection</a>

---



