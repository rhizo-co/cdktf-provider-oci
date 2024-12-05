# `dataOciLicenseManagerProductLicenseConsumers` Submodule <a name="`dataOciLicenseManagerProductLicenseConsumers` Submodule" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciLicenseManagerProductLicenseConsumers <a name="DataOciLicenseManagerProductLicenseConsumers" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_product_license_consumers oci_license_manager_product_license_consumers}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_license_manager_product_license_consumers

dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers(
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
  product_license_id: str,
  id: str = None,
  is_compartment_id_in_subtree: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_product_license_consumers#compartment_id DataOciLicenseManagerProductLicenseConsumers#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.Initializer.parameter.productLicenseId">product_license_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_product_license_consumers#product_license_id DataOciLicenseManagerProductLicenseConsumers#product_license_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_product_license_consumers#id DataOciLicenseManagerProductLicenseConsumers#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.Initializer.parameter.isCompartmentIdInSubtree">is_compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_product_license_consumers#is_compartment_id_in_subtree DataOciLicenseManagerProductLicenseConsumers#is_compartment_id_in_subtree}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_product_license_consumers#compartment_id DataOciLicenseManagerProductLicenseConsumers#compartment_id}.

---

##### `product_license_id`<sup>Required</sup> <a name="product_license_id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.Initializer.parameter.productLicenseId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_product_license_consumers#product_license_id DataOciLicenseManagerProductLicenseConsumers#product_license_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_product_license_consumers#id DataOciLicenseManagerProductLicenseConsumers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_compartment_id_in_subtree`<sup>Optional</sup> <a name="is_compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.Initializer.parameter.isCompartmentIdInSubtree"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_product_license_consumers#is_compartment_id_in_subtree DataOciLicenseManagerProductLicenseConsumers#is_compartment_id_in_subtree}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.resetIsCompartmentIdInSubtree">reset_is_compartment_id_in_subtree</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_compartment_id_in_subtree` <a name="reset_is_compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.resetIsCompartmentIdInSubtree"></a>

```python
def reset_is_compartment_id_in_subtree() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciLicenseManagerProductLicenseConsumers resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_license_manager_product_license_consumers

dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_license_manager_product_license_consumers

dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_license_manager_product_license_consumers

dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_license_manager_product_license_consumers

dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciLicenseManagerProductLicenseConsumers resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciLicenseManagerProductLicenseConsumers to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciLicenseManagerProductLicenseConsumers that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_product_license_consumers#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciLicenseManagerProductLicenseConsumers to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList">DataOciLicenseManagerProductLicenseConsumersItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.isCompartmentIdInSubtreeInput">is_compartment_id_in_subtree_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.productLicenseIdInput">product_license_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.isCompartmentIdInSubtree">is_compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.productLicenseId">product_license_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.items"></a>

```python
items: DataOciLicenseManagerProductLicenseConsumersItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList">DataOciLicenseManagerProductLicenseConsumersItemsList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_compartment_id_in_subtree_input`<sup>Optional</sup> <a name="is_compartment_id_in_subtree_input" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.isCompartmentIdInSubtreeInput"></a>

```python
is_compartment_id_in_subtree_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `product_license_id_input`<sup>Optional</sup> <a name="product_license_id_input" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.productLicenseIdInput"></a>

```python
product_license_id_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_compartment_id_in_subtree`<sup>Required</sup> <a name="is_compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.isCompartmentIdInSubtree"></a>

```python
is_compartment_id_in_subtree: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `product_license_id`<sup>Required</sup> <a name="product_license_id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.productLicenseId"></a>

```python
product_license_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciLicenseManagerProductLicenseConsumersConfig <a name="DataOciLicenseManagerProductLicenseConsumersConfig" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_license_manager_product_license_consumers

dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  product_license_id: str,
  id: str = None,
  is_compartment_id_in_subtree: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_product_license_consumers#compartment_id DataOciLicenseManagerProductLicenseConsumers#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersConfig.property.productLicenseId">product_license_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_product_license_consumers#product_license_id DataOciLicenseManagerProductLicenseConsumers#product_license_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_product_license_consumers#id DataOciLicenseManagerProductLicenseConsumers#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersConfig.property.isCompartmentIdInSubtree">is_compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_product_license_consumers#is_compartment_id_in_subtree DataOciLicenseManagerProductLicenseConsumers#is_compartment_id_in_subtree}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_product_license_consumers#compartment_id DataOciLicenseManagerProductLicenseConsumers#compartment_id}.

---

##### `product_license_id`<sup>Required</sup> <a name="product_license_id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersConfig.property.productLicenseId"></a>

```python
product_license_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_product_license_consumers#product_license_id DataOciLicenseManagerProductLicenseConsumers#product_license_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_product_license_consumers#id DataOciLicenseManagerProductLicenseConsumers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_compartment_id_in_subtree`<sup>Optional</sup> <a name="is_compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersConfig.property.isCompartmentIdInSubtree"></a>

```python
is_compartment_id_in_subtree: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_product_license_consumers#is_compartment_id_in_subtree DataOciLicenseManagerProductLicenseConsumers#is_compartment_id_in_subtree}.

---

### DataOciLicenseManagerProductLicenseConsumersItems <a name="DataOciLicenseManagerProductLicenseConsumersItems" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_license_manager_product_license_consumers

dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItems()
```


### DataOciLicenseManagerProductLicenseConsumersItemsMissingProducts <a name="DataOciLicenseManagerProductLicenseConsumersItemsMissingProducts" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProducts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProducts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_license_manager_product_license_consumers

dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProducts()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciLicenseManagerProductLicenseConsumersItemsList <a name="DataOciLicenseManagerProductLicenseConsumersItemsList" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_license_manager_product_license_consumers

dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciLicenseManagerProductLicenseConsumersItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList <a name="DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_license_manager_product_license_consumers

dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference <a name="DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_license_manager_product_license_consumers

dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.property.category">category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProducts">DataOciLicenseManagerProductLicenseConsumersItemsMissingProducts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `category`<sup>Required</sup> <a name="category" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.property.category"></a>

```python
category: str
```

- *Type:* str

---

##### `count`<sup>Required</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciLicenseManagerProductLicenseConsumersItemsMissingProducts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProducts">DataOciLicenseManagerProductLicenseConsumersItemsMissingProducts</a>

---


### DataOciLicenseManagerProductLicenseConsumersItemsOutputReference <a name="DataOciLicenseManagerProductLicenseConsumersItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_license_manager_product_license_consumers

dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.areAllOptionsAvailable">are_all_options_available</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.isBaseLicenseAvailable">is_base_license_available</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.licenseUnitsConsumed">license_units_consumed</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.licenseUnitType">license_unit_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.missingProducts">missing_products</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList">DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.productName">product_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.resourceCompartmentId">resource_compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.resourceCompartmentName">resource_compartment_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.resourceId">resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.resourceName">resource_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.resourceUnitCount">resource_unit_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.resourceUnitType">resource_unit_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItems">DataOciLicenseManagerProductLicenseConsumersItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `are_all_options_available`<sup>Required</sup> <a name="are_all_options_available" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.areAllOptionsAvailable"></a>

```python
are_all_options_available: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_base_license_available`<sup>Required</sup> <a name="is_base_license_available" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.isBaseLicenseAvailable"></a>

```python
is_base_license_available: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `license_units_consumed`<sup>Required</sup> <a name="license_units_consumed" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.licenseUnitsConsumed"></a>

```python
license_units_consumed: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `license_unit_type`<sup>Required</sup> <a name="license_unit_type" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.licenseUnitType"></a>

```python
license_unit_type: str
```

- *Type:* str

---

##### `missing_products`<sup>Required</sup> <a name="missing_products" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.missingProducts"></a>

```python
missing_products: DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList">DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList</a>

---

##### `product_name`<sup>Required</sup> <a name="product_name" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.productName"></a>

```python
product_name: str
```

- *Type:* str

---

##### `resource_compartment_id`<sup>Required</sup> <a name="resource_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.resourceCompartmentId"></a>

```python
resource_compartment_id: str
```

- *Type:* str

---

##### `resource_compartment_name`<sup>Required</sup> <a name="resource_compartment_name" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.resourceCompartmentName"></a>

```python
resource_compartment_name: str
```

- *Type:* str

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

---

##### `resource_name`<sup>Required</sup> <a name="resource_name" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.resourceName"></a>

```python
resource_name: str
```

- *Type:* str

---

##### `resource_unit_count`<sup>Required</sup> <a name="resource_unit_count" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.resourceUnitCount"></a>

```python
resource_unit_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_unit_type`<sup>Required</sup> <a name="resource_unit_type" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.resourceUnitType"></a>

```python
resource_unit_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciLicenseManagerProductLicenseConsumersItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItems">DataOciLicenseManagerProductLicenseConsumersItems</a>

---



