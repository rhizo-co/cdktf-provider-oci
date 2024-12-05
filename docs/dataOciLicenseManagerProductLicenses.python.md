# `dataOciLicenseManagerProductLicenses` Submodule <a name="`dataOciLicenseManagerProductLicenses` Submodule" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciLicenseManagerProductLicenses <a name="DataOciLicenseManagerProductLicenses" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_product_licenses oci_license_manager_product_licenses}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_license_manager_product_licenses

dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses(
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
  filter: typing.Union[IResolvable, typing.List[DataOciLicenseManagerProductLicensesFilter]] = None,
  id: str = None,
  is_compartment_id_in_subtree: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_product_licenses#compartment_id DataOciLicenseManagerProductLicenses#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilter">DataOciLicenseManagerProductLicensesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_product_licenses#id DataOciLicenseManagerProductLicenses#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.Initializer.parameter.isCompartmentIdInSubtree">is_compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_product_licenses#is_compartment_id_in_subtree DataOciLicenseManagerProductLicenses#is_compartment_id_in_subtree}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_product_licenses#compartment_id DataOciLicenseManagerProductLicenses#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilter">DataOciLicenseManagerProductLicensesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_product_licenses#filter DataOciLicenseManagerProductLicenses#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_product_licenses#id DataOciLicenseManagerProductLicenses#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_compartment_id_in_subtree`<sup>Optional</sup> <a name="is_compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.Initializer.parameter.isCompartmentIdInSubtree"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_product_licenses#is_compartment_id_in_subtree DataOciLicenseManagerProductLicenses#is_compartment_id_in_subtree}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.resetIsCompartmentIdInSubtree">reset_is_compartment_id_in_subtree</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciLicenseManagerProductLicensesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilter">DataOciLicenseManagerProductLicensesFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_compartment_id_in_subtree` <a name="reset_is_compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.resetIsCompartmentIdInSubtree"></a>

```python
def reset_is_compartment_id_in_subtree() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciLicenseManagerProductLicenses resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_license_manager_product_licenses

dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_license_manager_product_licenses

dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_license_manager_product_licenses

dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_license_manager_product_licenses

dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciLicenseManagerProductLicenses resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciLicenseManagerProductLicenses to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciLicenseManagerProductLicenses that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_product_licenses#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciLicenseManagerProductLicenses to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterList">DataOciLicenseManagerProductLicensesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.property.productLicenseCollection">product_license_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionList">DataOciLicenseManagerProductLicensesProductLicenseCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilter">DataOciLicenseManagerProductLicensesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.property.isCompartmentIdInSubtreeInput">is_compartment_id_in_subtree_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.property.isCompartmentIdInSubtree">is_compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.property.filter"></a>

```python
filter: DataOciLicenseManagerProductLicensesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterList">DataOciLicenseManagerProductLicensesFilterList</a>

---

##### `product_license_collection`<sup>Required</sup> <a name="product_license_collection" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.property.productLicenseCollection"></a>

```python
product_license_collection: DataOciLicenseManagerProductLicensesProductLicenseCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionList">DataOciLicenseManagerProductLicensesProductLicenseCollectionList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciLicenseManagerProductLicensesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilter">DataOciLicenseManagerProductLicensesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_compartment_id_in_subtree_input`<sup>Optional</sup> <a name="is_compartment_id_in_subtree_input" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.property.isCompartmentIdInSubtreeInput"></a>

```python
is_compartment_id_in_subtree_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_compartment_id_in_subtree`<sup>Required</sup> <a name="is_compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.property.isCompartmentIdInSubtree"></a>

```python
is_compartment_id_in_subtree: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciLicenseManagerProductLicensesConfig <a name="DataOciLicenseManagerProductLicensesConfig" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_license_manager_product_licenses

dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciLicenseManagerProductLicensesFilter]] = None,
  id: str = None,
  is_compartment_id_in_subtree: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_product_licenses#compartment_id DataOciLicenseManagerProductLicenses#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilter">DataOciLicenseManagerProductLicensesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_product_licenses#id DataOciLicenseManagerProductLicenses#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesConfig.property.isCompartmentIdInSubtree">is_compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_product_licenses#is_compartment_id_in_subtree DataOciLicenseManagerProductLicenses#is_compartment_id_in_subtree}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_product_licenses#compartment_id DataOciLicenseManagerProductLicenses#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciLicenseManagerProductLicensesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilter">DataOciLicenseManagerProductLicensesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_product_licenses#filter DataOciLicenseManagerProductLicenses#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_product_licenses#id DataOciLicenseManagerProductLicenses#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_compartment_id_in_subtree`<sup>Optional</sup> <a name="is_compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesConfig.property.isCompartmentIdInSubtree"></a>

```python
is_compartment_id_in_subtree: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_product_licenses#is_compartment_id_in_subtree DataOciLicenseManagerProductLicenses#is_compartment_id_in_subtree}.

---

### DataOciLicenseManagerProductLicensesFilter <a name="DataOciLicenseManagerProductLicensesFilter" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_license_manager_product_licenses

dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_product_licenses#name DataOciLicenseManagerProductLicenses#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_product_licenses#values DataOciLicenseManagerProductLicenses#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_product_licenses#regex DataOciLicenseManagerProductLicenses#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_product_licenses#name DataOciLicenseManagerProductLicenses#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_product_licenses#values DataOciLicenseManagerProductLicenses#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_product_licenses#regex DataOciLicenseManagerProductLicenses#regex}.

---

### DataOciLicenseManagerProductLicensesProductLicenseCollection <a name="DataOciLicenseManagerProductLicensesProductLicenseCollection" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_license_manager_product_licenses

dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollection()
```


### DataOciLicenseManagerProductLicensesProductLicenseCollectionItems <a name="DataOciLicenseManagerProductLicensesProductLicenseCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_license_manager_product_licenses

dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItems()
```


### DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImages <a name="DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImages" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImages"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImages.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_license_manager_product_licenses

dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImages()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciLicenseManagerProductLicensesFilterList <a name="DataOciLicenseManagerProductLicensesFilterList" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_license_manager_product_licenses

dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciLicenseManagerProductLicensesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilter">DataOciLicenseManagerProductLicensesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciLicenseManagerProductLicensesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilter">DataOciLicenseManagerProductLicensesFilter</a>]]

---


### DataOciLicenseManagerProductLicensesFilterOutputReference <a name="DataOciLicenseManagerProductLicensesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_license_manager_product_licenses

dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilter">DataOciLicenseManagerProductLicensesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciLicenseManagerProductLicensesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilter">DataOciLicenseManagerProductLicensesFilter</a>]

---


### DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesList <a name="DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesList" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_license_manager_product_licenses

dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference <a name="DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_license_manager_product_licenses

dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.property.listingId">listing_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.property.listingName">listing_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.property.packageVersion">package_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.property.publisher">publisher</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImages">DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImages</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `listing_id`<sup>Required</sup> <a name="listing_id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.property.listingId"></a>

```python
listing_id: str
```

- *Type:* str

---

##### `listing_name`<sup>Required</sup> <a name="listing_name" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.property.listingName"></a>

```python
listing_name: str
```

- *Type:* str

---

##### `package_version`<sup>Required</sup> <a name="package_version" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.property.packageVersion"></a>

```python
package_version: str
```

- *Type:* str

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.property.publisher"></a>

```python
publisher: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImages
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImages">DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImages</a>

---


### DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsList <a name="DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_license_manager_product_licenses

dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference <a name="DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_license_manager_product_licenses

dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.property.activeLicenseRecordCount">active_license_record_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.property.images">images</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesList">DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.property.isOverSubscribed">is_over_subscribed</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.property.isUnlimited">is_unlimited</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.property.isVendorOracle">is_vendor_oracle</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.property.licenseUnit">license_unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.property.statusDescription">status_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.property.totalActiveLicenseUnitCount">total_active_license_unit_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.property.totalLicenseRecordCount">total_license_record_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.property.totalLicenseUnitsConsumed">total_license_units_consumed</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.property.vendorName">vendor_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItems">DataOciLicenseManagerProductLicensesProductLicenseCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `active_license_record_count`<sup>Required</sup> <a name="active_license_record_count" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.property.activeLicenseRecordCount"></a>

```python
active_license_record_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `images`<sup>Required</sup> <a name="images" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.property.images"></a>

```python
images: DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesList">DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesList</a>

---

##### `is_over_subscribed`<sup>Required</sup> <a name="is_over_subscribed" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.property.isOverSubscribed"></a>

```python
is_over_subscribed: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_unlimited`<sup>Required</sup> <a name="is_unlimited" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.property.isUnlimited"></a>

```python
is_unlimited: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_vendor_oracle`<sup>Required</sup> <a name="is_vendor_oracle" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.property.isVendorOracle"></a>

```python
is_vendor_oracle: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `license_unit`<sup>Required</sup> <a name="license_unit" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.property.licenseUnit"></a>

```python
license_unit: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `status_description`<sup>Required</sup> <a name="status_description" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.property.statusDescription"></a>

```python
status_description: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `total_active_license_unit_count`<sup>Required</sup> <a name="total_active_license_unit_count" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.property.totalActiveLicenseUnitCount"></a>

```python
total_active_license_unit_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_license_record_count`<sup>Required</sup> <a name="total_license_record_count" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.property.totalLicenseRecordCount"></a>

```python
total_license_record_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_license_units_consumed`<sup>Required</sup> <a name="total_license_units_consumed" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.property.totalLicenseUnitsConsumed"></a>

```python
total_license_units_consumed: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `vendor_name`<sup>Required</sup> <a name="vendor_name" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.property.vendorName"></a>

```python
vendor_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciLicenseManagerProductLicensesProductLicenseCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItems">DataOciLicenseManagerProductLicensesProductLicenseCollectionItems</a>

---


### DataOciLicenseManagerProductLicensesProductLicenseCollectionList <a name="DataOciLicenseManagerProductLicensesProductLicenseCollectionList" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_license_manager_product_licenses

dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference <a name="DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_license_manager_product_licenses

dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsList">DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollection">DataOciLicenseManagerProductLicensesProductLicenseCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.property.items"></a>

```python
items: DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsList">DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciLicenseManagerProductLicensesProductLicenseCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollection">DataOciLicenseManagerProductLicensesProductLicenseCollection</a>

---



