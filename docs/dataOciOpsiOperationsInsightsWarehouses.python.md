# `dataOciOpsiOperationsInsightsWarehouses` Submodule <a name="`dataOciOpsiOperationsInsightsWarehouses` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOpsiOperationsInsightsWarehouses <a name="DataOciOpsiOperationsInsightsWarehouses" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouses oci_opsi_operations_insights_warehouses}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_operations_insights_warehouses

dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciOpsiOperationsInsightsWarehousesFilter]] = None,
  id: str = None,
  state: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouses#compartment_id DataOciOpsiOperationsInsightsWarehouses#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouses#display_name DataOciOpsiOperationsInsightsWarehouses#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilter">DataOciOpsiOperationsInsightsWarehousesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouses#id DataOciOpsiOperationsInsightsWarehouses#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.Initializer.parameter.state">state</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouses#state DataOciOpsiOperationsInsightsWarehouses#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouses#compartment_id DataOciOpsiOperationsInsightsWarehouses#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouses#display_name DataOciOpsiOperationsInsightsWarehouses#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilter">DataOciOpsiOperationsInsightsWarehousesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouses#filter DataOciOpsiOperationsInsightsWarehouses#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouses#id DataOciOpsiOperationsInsightsWarehouses#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.Initializer.parameter.state"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouses#state DataOciOpsiOperationsInsightsWarehouses#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciOpsiOperationsInsightsWarehousesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilter">DataOciOpsiOperationsInsightsWarehousesFilter</a>]]

---

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciOpsiOperationsInsightsWarehouses resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_operations_insights_warehouses

dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_operations_insights_warehouses

dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_operations_insights_warehouses

dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_operations_insights_warehouses

dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciOpsiOperationsInsightsWarehouses resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciOpsiOperationsInsightsWarehouses to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciOpsiOperationsInsightsWarehouses that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouses#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOpsiOperationsInsightsWarehouses to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterList">DataOciOpsiOperationsInsightsWarehousesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.property.operationsInsightsWarehouseSummaryCollection">operations_insights_warehouse_summary_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionList">DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilter">DataOciOpsiOperationsInsightsWarehousesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.property.stateInput">state_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.property.state">state</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.property.filter"></a>

```python
filter: DataOciOpsiOperationsInsightsWarehousesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterList">DataOciOpsiOperationsInsightsWarehousesFilterList</a>

---

##### `operations_insights_warehouse_summary_collection`<sup>Required</sup> <a name="operations_insights_warehouse_summary_collection" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.property.operationsInsightsWarehouseSummaryCollection"></a>

```python
operations_insights_warehouse_summary_collection: DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionList">DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciOpsiOperationsInsightsWarehousesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilter">DataOciOpsiOperationsInsightsWarehousesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.property.stateInput"></a>

```python
state_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.property.state"></a>

```python
state: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehouses.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOpsiOperationsInsightsWarehousesConfig <a name="DataOciOpsiOperationsInsightsWarehousesConfig" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_operations_insights_warehouses

dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciOpsiOperationsInsightsWarehousesFilter]] = None,
  id: str = None,
  state: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouses#compartment_id DataOciOpsiOperationsInsightsWarehouses#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouses#display_name DataOciOpsiOperationsInsightsWarehouses#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilter">DataOciOpsiOperationsInsightsWarehousesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouses#id DataOciOpsiOperationsInsightsWarehouses#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesConfig.property.state">state</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouses#state DataOciOpsiOperationsInsightsWarehouses#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouses#compartment_id DataOciOpsiOperationsInsightsWarehouses#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouses#display_name DataOciOpsiOperationsInsightsWarehouses#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciOpsiOperationsInsightsWarehousesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilter">DataOciOpsiOperationsInsightsWarehousesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouses#filter DataOciOpsiOperationsInsightsWarehouses#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouses#id DataOciOpsiOperationsInsightsWarehouses#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesConfig.property.state"></a>

```python
state: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouses#state DataOciOpsiOperationsInsightsWarehouses#state}.

---

### DataOciOpsiOperationsInsightsWarehousesFilter <a name="DataOciOpsiOperationsInsightsWarehousesFilter" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_operations_insights_warehouses

dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouses#name DataOciOpsiOperationsInsightsWarehouses#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouses#values DataOciOpsiOperationsInsightsWarehouses#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouses#regex DataOciOpsiOperationsInsightsWarehouses#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouses#name DataOciOpsiOperationsInsightsWarehouses#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouses#values DataOciOpsiOperationsInsightsWarehouses#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_warehouses#regex DataOciOpsiOperationsInsightsWarehouses#regex}.

---

### DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollection <a name="DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_operations_insights_warehouses

dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollection()
```


### DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItems <a name="DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_operations_insights_warehouses

dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItems()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOpsiOperationsInsightsWarehousesFilterList <a name="DataOciOpsiOperationsInsightsWarehousesFilterList" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_operations_insights_warehouses

dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOpsiOperationsInsightsWarehousesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilter">DataOciOpsiOperationsInsightsWarehousesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciOpsiOperationsInsightsWarehousesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilter">DataOciOpsiOperationsInsightsWarehousesFilter</a>]]

---


### DataOciOpsiOperationsInsightsWarehousesFilterOutputReference <a name="DataOciOpsiOperationsInsightsWarehousesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_operations_insights_warehouses

dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilter">DataOciOpsiOperationsInsightsWarehousesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciOpsiOperationsInsightsWarehousesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesFilter">DataOciOpsiOperationsInsightsWarehousesFilter</a>]

---


### DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsList <a name="DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_operations_insights_warehouses

dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference <a name="DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_operations_insights_warehouses

dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.property.cpuAllocated">cpu_allocated</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.property.cpuUsed">cpu_used</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.property.dynamicGroupId">dynamic_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.property.operationsInsightsTenancyId">operations_insights_tenancy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.property.storageAllocatedInGbs">storage_allocated_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.property.storageUsedInGbs">storage_used_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.property.timeLastWalletRotated">time_last_wallet_rotated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItems">DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `cpu_allocated`<sup>Required</sup> <a name="cpu_allocated" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.property.cpuAllocated"></a>

```python
cpu_allocated: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpu_used`<sup>Required</sup> <a name="cpu_used" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.property.cpuUsed"></a>

```python
cpu_used: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `dynamic_group_id`<sup>Required</sup> <a name="dynamic_group_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.property.dynamicGroupId"></a>

```python
dynamic_group_id: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `operations_insights_tenancy_id`<sup>Required</sup> <a name="operations_insights_tenancy_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.property.operationsInsightsTenancyId"></a>

```python
operations_insights_tenancy_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `storage_allocated_in_gbs`<sup>Required</sup> <a name="storage_allocated_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.property.storageAllocatedInGbs"></a>

```python
storage_allocated_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_used_in_gbs`<sup>Required</sup> <a name="storage_used_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.property.storageUsedInGbs"></a>

```python
storage_used_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_last_wallet_rotated`<sup>Required</sup> <a name="time_last_wallet_rotated" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.property.timeLastWalletRotated"></a>

```python
time_last_wallet_rotated: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItems">DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItems</a>

---


### DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionList <a name="DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_operations_insights_warehouses

dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference <a name="DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_operations_insights_warehouses

dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsList">DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollection">DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.property.items"></a>

```python
items: DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsList">DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsWarehouses.DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollection">DataOciOpsiOperationsInsightsWarehousesOperationsInsightsWarehouseSummaryCollection</a>

---



