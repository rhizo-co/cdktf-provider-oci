# `dataOciLicenseManagerLicenseMetric` Submodule <a name="`dataOciLicenseManagerLicenseMetric` Submodule" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciLicenseManagerLicenseMetric <a name="DataOciLicenseManagerLicenseMetric" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_license_metric oci_license_manager_license_metric}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_license_manager_license_metric

dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric(
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
  id: str = None,
  is_compartment_id_in_subtree: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_license_metric#compartment_id DataOciLicenseManagerLicenseMetric#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_license_metric#id DataOciLicenseManagerLicenseMetric#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.Initializer.parameter.isCompartmentIdInSubtree">is_compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_license_metric#is_compartment_id_in_subtree DataOciLicenseManagerLicenseMetric#is_compartment_id_in_subtree}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_license_metric#compartment_id DataOciLicenseManagerLicenseMetric#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_license_metric#id DataOciLicenseManagerLicenseMetric#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_compartment_id_in_subtree`<sup>Optional</sup> <a name="is_compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.Initializer.parameter.isCompartmentIdInSubtree"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_license_metric#is_compartment_id_in_subtree DataOciLicenseManagerLicenseMetric#is_compartment_id_in_subtree}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.resetIsCompartmentIdInSubtree">reset_is_compartment_id_in_subtree</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_compartment_id_in_subtree` <a name="reset_is_compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.resetIsCompartmentIdInSubtree"></a>

```python
def reset_is_compartment_id_in_subtree() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciLicenseManagerLicenseMetric resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_license_manager_license_metric

dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_license_manager_license_metric

dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_license_manager_license_metric

dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_license_manager_license_metric

dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciLicenseManagerLicenseMetric resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciLicenseManagerLicenseMetric to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciLicenseManagerLicenseMetric that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_license_metric#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciLicenseManagerLicenseMetric to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.licenseRecordExpiringSoonCount">license_record_expiring_soon_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.totalByolInstanceCount">total_byol_instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.totalLicenseIncludedInstanceCount">total_license_included_instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.totalProductLicenseCount">total_product_license_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.isCompartmentIdInSubtreeInput">is_compartment_id_in_subtree_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.isCompartmentIdInSubtree">is_compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `license_record_expiring_soon_count`<sup>Required</sup> <a name="license_record_expiring_soon_count" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.licenseRecordExpiringSoonCount"></a>

```python
license_record_expiring_soon_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_byol_instance_count`<sup>Required</sup> <a name="total_byol_instance_count" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.totalByolInstanceCount"></a>

```python
total_byol_instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_license_included_instance_count`<sup>Required</sup> <a name="total_license_included_instance_count" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.totalLicenseIncludedInstanceCount"></a>

```python
total_license_included_instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_product_license_count`<sup>Required</sup> <a name="total_product_license_count" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.totalProductLicenseCount"></a>

```python
total_product_license_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_compartment_id_in_subtree_input`<sup>Optional</sup> <a name="is_compartment_id_in_subtree_input" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.isCompartmentIdInSubtreeInput"></a>

```python
is_compartment_id_in_subtree_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_compartment_id_in_subtree`<sup>Required</sup> <a name="is_compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.isCompartmentIdInSubtree"></a>

```python
is_compartment_id_in_subtree: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciLicenseManagerLicenseMetricConfig <a name="DataOciLicenseManagerLicenseMetricConfig" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetricConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetricConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_license_manager_license_metric

dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetricConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  id: str = None,
  is_compartment_id_in_subtree: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetricConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetricConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetricConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetricConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetricConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetricConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetricConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetricConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_license_metric#compartment_id DataOciLicenseManagerLicenseMetric#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetricConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_license_metric#id DataOciLicenseManagerLicenseMetric#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetricConfig.property.isCompartmentIdInSubtree">is_compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_license_metric#is_compartment_id_in_subtree DataOciLicenseManagerLicenseMetric#is_compartment_id_in_subtree}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetricConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetricConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetricConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetricConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetricConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetricConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetricConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetricConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_license_metric#compartment_id DataOciLicenseManagerLicenseMetric#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetricConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_license_metric#id DataOciLicenseManagerLicenseMetric#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_compartment_id_in_subtree`<sup>Optional</sup> <a name="is_compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetricConfig.property.isCompartmentIdInSubtree"></a>

```python
is_compartment_id_in_subtree: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_license_metric#is_compartment_id_in_subtree DataOciLicenseManagerLicenseMetric#is_compartment_id_in_subtree}.

---



