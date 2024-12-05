# `dataOciCapacityManagementOccHandoverResourceBlockDetails` Submodule <a name="`dataOciCapacityManagementOccHandoverResourceBlockDetails` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCapacityManagementOccHandoverResourceBlockDetails <a name="DataOciCapacityManagementOccHandoverResourceBlockDetails" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_handover_resource_block_details oci_capacity_management_occ_handover_resource_block_details}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_occ_handover_resource_block_details

dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails(
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
  filter: typing.Union[IResolvable, typing.List[DataOciCapacityManagementOccHandoverResourceBlockDetailsFilter]] = None,
  host_id: str = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.Initializer.parameter.occHandoverResourceBlockId">occ_handover_resource_block_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_handover_resource_block_details#occ_handover_resource_block_id DataOciCapacityManagementOccHandoverResourceBlockDetails#occ_handover_resource_block_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilter">DataOciCapacityManagementOccHandoverResourceBlockDetailsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.Initializer.parameter.hostId">host_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_handover_resource_block_details#host_id DataOciCapacityManagementOccHandoverResourceBlockDetails#host_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_handover_resource_block_details#id DataOciCapacityManagementOccHandoverResourceBlockDetails#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `occ_handover_resource_block_id`<sup>Required</sup> <a name="occ_handover_resource_block_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.Initializer.parameter.occHandoverResourceBlockId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_handover_resource_block_details#occ_handover_resource_block_id DataOciCapacityManagementOccHandoverResourceBlockDetails#occ_handover_resource_block_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilter">DataOciCapacityManagementOccHandoverResourceBlockDetailsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_handover_resource_block_details#filter DataOciCapacityManagementOccHandoverResourceBlockDetails#filter}

---

##### `host_id`<sup>Optional</sup> <a name="host_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.Initializer.parameter.hostId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_handover_resource_block_details#host_id DataOciCapacityManagementOccHandoverResourceBlockDetails#host_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_handover_resource_block_details#id DataOciCapacityManagementOccHandoverResourceBlockDetails#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.resetHostId">reset_host_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciCapacityManagementOccHandoverResourceBlockDetailsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilter">DataOciCapacityManagementOccHandoverResourceBlockDetailsFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_host_id` <a name="reset_host_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.resetHostId"></a>

```python
def reset_host_id() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciCapacityManagementOccHandoverResourceBlockDetails resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_occ_handover_resource_block_details

dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_occ_handover_resource_block_details

dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_occ_handover_resource_block_details

dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_occ_handover_resource_block_details

dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciCapacityManagementOccHandoverResourceBlockDetails resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciCapacityManagementOccHandoverResourceBlockDetails to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciCapacityManagementOccHandoverResourceBlockDetails that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_handover_resource_block_details#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCapacityManagementOccHandoverResourceBlockDetails to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList">DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.occHandoverResourceBlockDetailCollection">occ_handover_resource_block_detail_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList">DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilter">DataOciCapacityManagementOccHandoverResourceBlockDetailsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.hostIdInput">host_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.occHandoverResourceBlockIdInput">occ_handover_resource_block_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.hostId">host_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.occHandoverResourceBlockId">occ_handover_resource_block_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.filter"></a>

```python
filter: DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList">DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList</a>

---

##### `occ_handover_resource_block_detail_collection`<sup>Required</sup> <a name="occ_handover_resource_block_detail_collection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.occHandoverResourceBlockDetailCollection"></a>

```python
occ_handover_resource_block_detail_collection: DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList">DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciCapacityManagementOccHandoverResourceBlockDetailsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilter">DataOciCapacityManagementOccHandoverResourceBlockDetailsFilter</a>]]

---

##### `host_id_input`<sup>Optional</sup> <a name="host_id_input" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.hostIdInput"></a>

```python
host_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `occ_handover_resource_block_id_input`<sup>Optional</sup> <a name="occ_handover_resource_block_id_input" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.occHandoverResourceBlockIdInput"></a>

```python
occ_handover_resource_block_id_input: str
```

- *Type:* str

---

##### `host_id`<sup>Required</sup> <a name="host_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.hostId"></a>

```python
host_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `occ_handover_resource_block_id`<sup>Required</sup> <a name="occ_handover_resource_block_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.occHandoverResourceBlockId"></a>

```python
occ_handover_resource_block_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetails.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCapacityManagementOccHandoverResourceBlockDetailsConfig <a name="DataOciCapacityManagementOccHandoverResourceBlockDetailsConfig" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_occ_handover_resource_block_details

dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  occ_handover_resource_block_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciCapacityManagementOccHandoverResourceBlockDetailsFilter]] = None,
  host_id: str = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsConfig.property.occHandoverResourceBlockId">occ_handover_resource_block_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_handover_resource_block_details#occ_handover_resource_block_id DataOciCapacityManagementOccHandoverResourceBlockDetails#occ_handover_resource_block_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilter">DataOciCapacityManagementOccHandoverResourceBlockDetailsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsConfig.property.hostId">host_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_handover_resource_block_details#host_id DataOciCapacityManagementOccHandoverResourceBlockDetails#host_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_handover_resource_block_details#id DataOciCapacityManagementOccHandoverResourceBlockDetails#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `occ_handover_resource_block_id`<sup>Required</sup> <a name="occ_handover_resource_block_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsConfig.property.occHandoverResourceBlockId"></a>

```python
occ_handover_resource_block_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_handover_resource_block_details#occ_handover_resource_block_id DataOciCapacityManagementOccHandoverResourceBlockDetails#occ_handover_resource_block_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciCapacityManagementOccHandoverResourceBlockDetailsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilter">DataOciCapacityManagementOccHandoverResourceBlockDetailsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_handover_resource_block_details#filter DataOciCapacityManagementOccHandoverResourceBlockDetails#filter}

---

##### `host_id`<sup>Optional</sup> <a name="host_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsConfig.property.hostId"></a>

```python
host_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_handover_resource_block_details#host_id DataOciCapacityManagementOccHandoverResourceBlockDetails#host_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_handover_resource_block_details#id DataOciCapacityManagementOccHandoverResourceBlockDetails#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciCapacityManagementOccHandoverResourceBlockDetailsFilter <a name="DataOciCapacityManagementOccHandoverResourceBlockDetailsFilter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_occ_handover_resource_block_details

dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_handover_resource_block_details#name DataOciCapacityManagementOccHandoverResourceBlockDetails#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_handover_resource_block_details#values DataOciCapacityManagementOccHandoverResourceBlockDetails#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_handover_resource_block_details#regex DataOciCapacityManagementOccHandoverResourceBlockDetails#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_handover_resource_block_details#name DataOciCapacityManagementOccHandoverResourceBlockDetails#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_handover_resource_block_details#values DataOciCapacityManagementOccHandoverResourceBlockDetails#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_handover_resource_block_details#regex DataOciCapacityManagementOccHandoverResourceBlockDetails#regex}.

---

### DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollection <a name="DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_occ_handover_resource_block_details

dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollection()
```


### DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItems <a name="DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_occ_handover_resource_block_details

dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItems()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList <a name="DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_occ_handover_resource_block_details

dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilter">DataOciCapacityManagementOccHandoverResourceBlockDetailsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciCapacityManagementOccHandoverResourceBlockDetailsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilter">DataOciCapacityManagementOccHandoverResourceBlockDetailsFilter</a>]]

---


### DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference <a name="DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_occ_handover_resource_block_details

dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilter">DataOciCapacityManagementOccHandoverResourceBlockDetailsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciCapacityManagementOccHandoverResourceBlockDetailsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsFilter">DataOciCapacityManagementOccHandoverResourceBlockDetailsFilter</a>]

---


### DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList <a name="DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_occ_handover_resource_block_details

dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference <a name="DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_occ_handover_resource_block_details

dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.property.details">details</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.property.occResourceHandoverBlockId">occ_resource_handover_block_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItems">DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `details`<sup>Required</sup> <a name="details" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.property.details"></a>

```python
details: StringMap
```

- *Type:* cdktf.StringMap

---

##### `occ_resource_handover_block_id`<sup>Required</sup> <a name="occ_resource_handover_block_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.property.occResourceHandoverBlockId"></a>

```python
occ_resource_handover_block_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItems">DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItems</a>

---


### DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList <a name="DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_occ_handover_resource_block_details

dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference <a name="DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_occ_handover_resource_block_details

dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList">DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollection">DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.property.items"></a>

```python
items: DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList">DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlockDetails.DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollection">DataOciCapacityManagementOccHandoverResourceBlockDetailsOccHandoverResourceBlockDetailCollection</a>

---



