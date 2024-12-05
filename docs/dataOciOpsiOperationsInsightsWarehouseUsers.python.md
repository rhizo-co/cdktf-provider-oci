# `dataOciOpsiOperationsInsightsWarehouseUsers` Submodule <a name="`dataOciOpsiOperationsInsightsWarehouseUsers` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOpsiOperationsInsightsWarehouseUsers <a name="DataOciOpsiOperationsInsightsWarehouseUsers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouse_users oci_opsi_operations_insights_warehouse_users}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_operations_insights_warehouse_users

dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  operations_insights_warehouse_id: str,
  compartment_id: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciOpsiOperationsInsightsWarehouseUsersFilter]] = None,
  id: str = None,
  state: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.Initializer.parameter.operationsInsightsWarehouseId">operations_insights_warehouse_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouse_users#operations_insights_warehouse_id DataOciOpsiOperationsInsightsWarehouseUsers#operations_insights_warehouse_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouse_users#compartment_id DataOciOpsiOperationsInsightsWarehouseUsers#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouse_users#display_name DataOciOpsiOperationsInsightsWarehouseUsers#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilter">DataOciOpsiOperationsInsightsWarehouseUsersFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouse_users#id DataOciOpsiOperationsInsightsWarehouseUsers#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.Initializer.parameter.state">state</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouse_users#state DataOciOpsiOperationsInsightsWarehouseUsers#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `operations_insights_warehouse_id`<sup>Required</sup> <a name="operations_insights_warehouse_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.Initializer.parameter.operationsInsightsWarehouseId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouse_users#operations_insights_warehouse_id DataOciOpsiOperationsInsightsWarehouseUsers#operations_insights_warehouse_id}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouse_users#compartment_id DataOciOpsiOperationsInsightsWarehouseUsers#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouse_users#display_name DataOciOpsiOperationsInsightsWarehouseUsers#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilter">DataOciOpsiOperationsInsightsWarehouseUsersFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouse_users#filter DataOciOpsiOperationsInsightsWarehouseUsers#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouse_users#id DataOciOpsiOperationsInsightsWarehouseUsers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.Initializer.parameter.state"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouse_users#state DataOciOpsiOperationsInsightsWarehouseUsers#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciOpsiOperationsInsightsWarehouseUsersFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilter">DataOciOpsiOperationsInsightsWarehouseUsersFilter</a>]]

---

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciOpsiOperationsInsightsWarehouseUsers resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_operations_insights_warehouse_users

dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_operations_insights_warehouse_users

dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_operations_insights_warehouse_users

dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_operations_insights_warehouse_users

dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciOpsiOperationsInsightsWarehouseUsers resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciOpsiOperationsInsightsWarehouseUsers to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciOpsiOperationsInsightsWarehouseUsers that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouse_users#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOpsiOperationsInsightsWarehouseUsers to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterList">DataOciOpsiOperationsInsightsWarehouseUsersFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.operationsInsightsWarehouseUserSummaryCollection">operations_insights_warehouse_user_summary_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionList">DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilter">DataOciOpsiOperationsInsightsWarehouseUsersFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.operationsInsightsWarehouseIdInput">operations_insights_warehouse_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.stateInput">state_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.operationsInsightsWarehouseId">operations_insights_warehouse_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.state">state</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.filter"></a>

```python
filter: DataOciOpsiOperationsInsightsWarehouseUsersFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterList">DataOciOpsiOperationsInsightsWarehouseUsersFilterList</a>

---

##### `operations_insights_warehouse_user_summary_collection`<sup>Required</sup> <a name="operations_insights_warehouse_user_summary_collection" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.operationsInsightsWarehouseUserSummaryCollection"></a>

```python
operations_insights_warehouse_user_summary_collection: DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionList">DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciOpsiOperationsInsightsWarehouseUsersFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilter">DataOciOpsiOperationsInsightsWarehouseUsersFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `operations_insights_warehouse_id_input`<sup>Optional</sup> <a name="operations_insights_warehouse_id_input" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.operationsInsightsWarehouseIdInput"></a>

```python
operations_insights_warehouse_id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.stateInput"></a>

```python
state_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `operations_insights_warehouse_id`<sup>Required</sup> <a name="operations_insights_warehouse_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.operationsInsightsWarehouseId"></a>

```python
operations_insights_warehouse_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.state"></a>

```python
state: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsers.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOpsiOperationsInsightsWarehouseUsersConfig <a name="DataOciOpsiOperationsInsightsWarehouseUsersConfig" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_operations_insights_warehouse_users

dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  operations_insights_warehouse_id: str,
  compartment_id: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciOpsiOperationsInsightsWarehouseUsersFilter]] = None,
  id: str = None,
  state: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersConfig.property.operationsInsightsWarehouseId">operations_insights_warehouse_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouse_users#operations_insights_warehouse_id DataOciOpsiOperationsInsightsWarehouseUsers#operations_insights_warehouse_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouse_users#compartment_id DataOciOpsiOperationsInsightsWarehouseUsers#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouse_users#display_name DataOciOpsiOperationsInsightsWarehouseUsers#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilter">DataOciOpsiOperationsInsightsWarehouseUsersFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouse_users#id DataOciOpsiOperationsInsightsWarehouseUsers#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersConfig.property.state">state</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouse_users#state DataOciOpsiOperationsInsightsWarehouseUsers#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `operations_insights_warehouse_id`<sup>Required</sup> <a name="operations_insights_warehouse_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersConfig.property.operationsInsightsWarehouseId"></a>

```python
operations_insights_warehouse_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouse_users#operations_insights_warehouse_id DataOciOpsiOperationsInsightsWarehouseUsers#operations_insights_warehouse_id}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouse_users#compartment_id DataOciOpsiOperationsInsightsWarehouseUsers#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouse_users#display_name DataOciOpsiOperationsInsightsWarehouseUsers#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciOpsiOperationsInsightsWarehouseUsersFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilter">DataOciOpsiOperationsInsightsWarehouseUsersFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouse_users#filter DataOciOpsiOperationsInsightsWarehouseUsers#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouse_users#id DataOciOpsiOperationsInsightsWarehouseUsers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersConfig.property.state"></a>

```python
state: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouse_users#state DataOciOpsiOperationsInsightsWarehouseUsers#state}.

---

### DataOciOpsiOperationsInsightsWarehouseUsersFilter <a name="DataOciOpsiOperationsInsightsWarehouseUsersFilter" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_operations_insights_warehouse_users

dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouse_users#name DataOciOpsiOperationsInsightsWarehouseUsers#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouse_users#values DataOciOpsiOperationsInsightsWarehouseUsers#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouse_users#regex DataOciOpsiOperationsInsightsWarehouseUsers#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouse_users#name DataOciOpsiOperationsInsightsWarehouseUsers#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouse_users#values DataOciOpsiOperationsInsightsWarehouseUsers#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouse_users#regex DataOciOpsiOperationsInsightsWarehouseUsers#regex}.

---

### DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollection <a name="DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_operations_insights_warehouse_users

dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollection()
```


### DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItems <a name="DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_operations_insights_warehouse_users

dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItems()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOpsiOperationsInsightsWarehouseUsersFilterList <a name="DataOciOpsiOperationsInsightsWarehouseUsersFilterList" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_operations_insights_warehouse_users

dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilter">DataOciOpsiOperationsInsightsWarehouseUsersFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciOpsiOperationsInsightsWarehouseUsersFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilter">DataOciOpsiOperationsInsightsWarehouseUsersFilter</a>]]

---


### DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference <a name="DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_operations_insights_warehouse_users

dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilter">DataOciOpsiOperationsInsightsWarehouseUsersFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciOpsiOperationsInsightsWarehouseUsersFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersFilter">DataOciOpsiOperationsInsightsWarehouseUsersFilter</a>]

---


### DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsList <a name="DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_operations_insights_warehouse_users

dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference <a name="DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_operations_insights_warehouse_users

dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.connectionPassword">connection_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.isAwrDataAccess">is_awr_data_access</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.isEmDataAccess">is_em_data_access</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.isOpsiDataAccess">is_opsi_data_access</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.operationsInsightsWarehouseId">operations_insights_warehouse_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItems">DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `connection_password`<sup>Required</sup> <a name="connection_password" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.connectionPassword"></a>

```python
connection_password: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_awr_data_access`<sup>Required</sup> <a name="is_awr_data_access" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.isAwrDataAccess"></a>

```python
is_awr_data_access: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_em_data_access`<sup>Required</sup> <a name="is_em_data_access" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.isEmDataAccess"></a>

```python
is_em_data_access: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_opsi_data_access`<sup>Required</sup> <a name="is_opsi_data_access" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.isOpsiDataAccess"></a>

```python
is_opsi_data_access: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `operations_insights_warehouse_id`<sup>Required</sup> <a name="operations_insights_warehouse_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.operationsInsightsWarehouseId"></a>

```python
operations_insights_warehouse_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItems">DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItems</a>

---


### DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionList <a name="DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_operations_insights_warehouse_users

dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference <a name="DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_operations_insights_warehouse_users

dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsList">DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollection">DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.property.items"></a>

```python
items: DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsList">DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouseUsers.DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollection">DataOciOpsiOperationsInsightsWarehouseUsersOperationsInsightsWarehouseUserSummaryCollection</a>

---



