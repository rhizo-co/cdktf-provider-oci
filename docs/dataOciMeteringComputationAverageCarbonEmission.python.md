# `dataOciMeteringComputationAverageCarbonEmission` Submodule <a name="`dataOciMeteringComputationAverageCarbonEmission` Submodule" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciMeteringComputationAverageCarbonEmission <a name="DataOciMeteringComputationAverageCarbonEmission" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_average_carbon_emission oci_metering_computation_average_carbon_emission}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_metering_computation_average_carbon_emission

dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  sku_part_number: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.Initializer.parameter.skuPartNumber">sku_part_number</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_average_carbon_emission#sku_part_number DataOciMeteringComputationAverageCarbonEmission#sku_part_number}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_average_carbon_emission#id DataOciMeteringComputationAverageCarbonEmission#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `sku_part_number`<sup>Required</sup> <a name="sku_part_number" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.Initializer.parameter.skuPartNumber"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_average_carbon_emission#sku_part_number DataOciMeteringComputationAverageCarbonEmission#sku_part_number}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_average_carbon_emission#id DataOciMeteringComputationAverageCarbonEmission#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciMeteringComputationAverageCarbonEmission resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_metering_computation_average_carbon_emission

dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_metering_computation_average_carbon_emission

dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_metering_computation_average_carbon_emission

dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_metering_computation_average_carbon_emission

dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciMeteringComputationAverageCarbonEmission resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciMeteringComputationAverageCarbonEmission to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciMeteringComputationAverageCarbonEmission that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_average_carbon_emission#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciMeteringComputationAverageCarbonEmission to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.property.averageCarbonEmission">average_carbon_emission</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.property.skuPartNumberInput">sku_part_number_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.property.skuPartNumber">sku_part_number</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `average_carbon_emission`<sup>Required</sup> <a name="average_carbon_emission" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.property.averageCarbonEmission"></a>

```python
average_carbon_emission: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `sku_part_number_input`<sup>Optional</sup> <a name="sku_part_number_input" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.property.skuPartNumberInput"></a>

```python
sku_part_number_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `sku_part_number`<sup>Required</sup> <a name="sku_part_number" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.property.skuPartNumber"></a>

```python
sku_part_number: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmission.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciMeteringComputationAverageCarbonEmissionConfig <a name="DataOciMeteringComputationAverageCarbonEmissionConfig" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmissionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmissionConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_metering_computation_average_carbon_emission

dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmissionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  sku_part_number: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmissionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmissionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmissionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmissionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmissionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmissionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmissionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmissionConfig.property.skuPartNumber">sku_part_number</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_average_carbon_emission#sku_part_number DataOciMeteringComputationAverageCarbonEmission#sku_part_number}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmissionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_average_carbon_emission#id DataOciMeteringComputationAverageCarbonEmission#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmissionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmissionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmissionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmissionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmissionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmissionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmissionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `sku_part_number`<sup>Required</sup> <a name="sku_part_number" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmissionConfig.property.skuPartNumber"></a>

```python
sku_part_number: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_average_carbon_emission#sku_part_number DataOciMeteringComputationAverageCarbonEmission#sku_part_number}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationAverageCarbonEmission.DataOciMeteringComputationAverageCarbonEmissionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_average_carbon_emission#id DataOciMeteringComputationAverageCarbonEmission#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



