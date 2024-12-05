# `dataOciMeteringComputationUsageCarbonEmissionsQueries` Submodule <a name="`dataOciMeteringComputationUsageCarbonEmissionsQueries` Submodule" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciMeteringComputationUsageCarbonEmissionsQueries <a name="DataOciMeteringComputationUsageCarbonEmissionsQueries" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_usage_carbon_emissions_queries oci_metering_computation_usage_carbon_emissions_queries}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_metering_computation_usage_carbon_emissions_queries

dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries(
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
  filter: typing.Union[IResolvable, typing.List[DataOciMeteringComputationUsageCarbonEmissionsQueriesFilter]] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_usage_carbon_emissions_queries#compartment_id DataOciMeteringComputationUsageCarbonEmissionsQueries#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilter">DataOciMeteringComputationUsageCarbonEmissionsQueriesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_usage_carbon_emissions_queries#id DataOciMeteringComputationUsageCarbonEmissionsQueries#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_usage_carbon_emissions_queries#compartment_id DataOciMeteringComputationUsageCarbonEmissionsQueries#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilter">DataOciMeteringComputationUsageCarbonEmissionsQueriesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_usage_carbon_emissions_queries#filter DataOciMeteringComputationUsageCarbonEmissionsQueries#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_usage_carbon_emissions_queries#id DataOciMeteringComputationUsageCarbonEmissionsQueries#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciMeteringComputationUsageCarbonEmissionsQueriesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilter">DataOciMeteringComputationUsageCarbonEmissionsQueriesFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciMeteringComputationUsageCarbonEmissionsQueries resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_metering_computation_usage_carbon_emissions_queries

dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_metering_computation_usage_carbon_emissions_queries

dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_metering_computation_usage_carbon_emissions_queries

dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_metering_computation_usage_carbon_emissions_queries

dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciMeteringComputationUsageCarbonEmissionsQueries resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciMeteringComputationUsageCarbonEmissionsQueries to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciMeteringComputationUsageCarbonEmissionsQueries that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_usage_carbon_emissions_queries#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciMeteringComputationUsageCarbonEmissionsQueries to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterList">DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.property.usageCarbonEmissionsQueryCollection">usage_carbon_emissions_query_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionList">DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilter">DataOciMeteringComputationUsageCarbonEmissionsQueriesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.property.filter"></a>

```python
filter: DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterList">DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterList</a>

---

##### `usage_carbon_emissions_query_collection`<sup>Required</sup> <a name="usage_carbon_emissions_query_collection" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.property.usageCarbonEmissionsQueryCollection"></a>

```python
usage_carbon_emissions_query_collection: DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionList">DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciMeteringComputationUsageCarbonEmissionsQueriesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilter">DataOciMeteringComputationUsageCarbonEmissionsQueriesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueries.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciMeteringComputationUsageCarbonEmissionsQueriesConfig <a name="DataOciMeteringComputationUsageCarbonEmissionsQueriesConfig" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_metering_computation_usage_carbon_emissions_queries

dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciMeteringComputationUsageCarbonEmissionsQueriesFilter]] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_usage_carbon_emissions_queries#compartment_id DataOciMeteringComputationUsageCarbonEmissionsQueries#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilter">DataOciMeteringComputationUsageCarbonEmissionsQueriesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_usage_carbon_emissions_queries#id DataOciMeteringComputationUsageCarbonEmissionsQueries#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_usage_carbon_emissions_queries#compartment_id DataOciMeteringComputationUsageCarbonEmissionsQueries#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciMeteringComputationUsageCarbonEmissionsQueriesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilter">DataOciMeteringComputationUsageCarbonEmissionsQueriesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_usage_carbon_emissions_queries#filter DataOciMeteringComputationUsageCarbonEmissionsQueries#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_usage_carbon_emissions_queries#id DataOciMeteringComputationUsageCarbonEmissionsQueries#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciMeteringComputationUsageCarbonEmissionsQueriesFilter <a name="DataOciMeteringComputationUsageCarbonEmissionsQueriesFilter" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_metering_computation_usage_carbon_emissions_queries

dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_usage_carbon_emissions_queries#name DataOciMeteringComputationUsageCarbonEmissionsQueries#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_usage_carbon_emissions_queries#values DataOciMeteringComputationUsageCarbonEmissionsQueries#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_usage_carbon_emissions_queries#regex DataOciMeteringComputationUsageCarbonEmissionsQueries#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_usage_carbon_emissions_queries#name DataOciMeteringComputationUsageCarbonEmissionsQueries#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_usage_carbon_emissions_queries#values DataOciMeteringComputationUsageCarbonEmissionsQueries#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/metering_computation_usage_carbon_emissions_queries#regex DataOciMeteringComputationUsageCarbonEmissionsQueries#regex}.

---

### DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollection <a name="DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollection" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_metering_computation_usage_carbon_emissions_queries

dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollection()
```


### DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItems <a name="DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_metering_computation_usage_carbon_emissions_queries

dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItems()
```


### DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinition <a name="DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinition" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinition"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinition.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_metering_computation_usage_carbon_emissions_queries

dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinition()
```


### DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUi <a name="DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUi" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUi"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUi.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_metering_computation_usage_carbon_emissions_queries

dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUi()
```


### DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQuery <a name="DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQuery" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQuery"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQuery.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_metering_computation_usage_carbon_emissions_queries

dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQuery()
```


### DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTag <a name="DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTag" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTag"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTag.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_metering_computation_usage_carbon_emissions_queries

dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTag()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterList <a name="DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterList" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_metering_computation_usage_carbon_emissions_queries

dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilter">DataOciMeteringComputationUsageCarbonEmissionsQueriesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciMeteringComputationUsageCarbonEmissionsQueriesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilter">DataOciMeteringComputationUsageCarbonEmissionsQueriesFilter</a>]]

---


### DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterOutputReference <a name="DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_metering_computation_usage_carbon_emissions_queries

dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilter">DataOciMeteringComputationUsageCarbonEmissionsQueriesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciMeteringComputationUsageCarbonEmissionsQueriesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesFilter">DataOciMeteringComputationUsageCarbonEmissionsQueriesFilter</a>]

---


### DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsList <a name="DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_metering_computation_usage_carbon_emissions_queries

dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsOutputReference <a name="DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_metering_computation_usage_carbon_emissions_queries

dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsOutputReference.property.queryDefinition">query_definition</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionList">DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItems">DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `query_definition`<sup>Required</sup> <a name="query_definition" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsOutputReference.property.queryDefinition"></a>

```python
query_definition: DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionList">DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItems">DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItems</a>

---


### DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUiList <a name="DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUiList" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUiList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUiList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_metering_computation_usage_carbon_emissions_queries

dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUiList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUiList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUiList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUiList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUiList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUiList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUiList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUiList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUiList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUiList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUiList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUiList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUiList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUiList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUiList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUiList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUiList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUiList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUiList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUiList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUiList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUiList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUiList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUiList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference <a name="DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_metering_computation_usage_carbon_emissions_queries

dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.property.graph">graph</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.property.isCumulativeGraph">is_cumulative_graph</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUi">DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUi</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `graph`<sup>Required</sup> <a name="graph" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.property.graph"></a>

```python
graph: str
```

- *Type:* str

---

##### `is_cumulative_graph`<sup>Required</sup> <a name="is_cumulative_graph" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.property.isCumulativeGraph"></a>

```python
is_cumulative_graph: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUiOutputReference.property.internalValue"></a>

```python
internal_value: DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUi
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUi">DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUi</a>

---


### DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionList <a name="DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionList" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_metering_computation_usage_carbon_emissions_queries

dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionOutputReference <a name="DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_metering_computation_usage_carbon_emissions_queries

dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionOutputReference.property.costAnalysisUi">cost_analysis_ui</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUiList">DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUiList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionOutputReference.property.reportQuery">report_query</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryList">DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionOutputReference.property.version">version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinition">DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cost_analysis_ui`<sup>Required</sup> <a name="cost_analysis_ui" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionOutputReference.property.costAnalysisUi"></a>

```python
cost_analysis_ui: DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUiList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUiList">DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionCostAnalysisUiList</a>

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `report_query`<sup>Required</sup> <a name="report_query" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionOutputReference.property.reportQuery"></a>

```python
report_query: DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryList">DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryList</a>

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionOutputReference.property.version"></a>

```python
version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinition
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinition">DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinition</a>

---


### DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTagList <a name="DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTagList" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTagList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTagList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_metering_computation_usage_carbon_emissions_queries

dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTagList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTagList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTagList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTagList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTagList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTagList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTagList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTagList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTagList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTagList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTagList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTagList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTagList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTagList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTagList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTagList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTagList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTagList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTagList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTagList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference <a name="DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_metering_computation_usage_carbon_emissions_queries

dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTag">DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTag</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTagOutputReference.property.internalValue"></a>

```python
internal_value: DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTag
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTag">DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTag</a>

---


### DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryList <a name="DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryList" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_metering_computation_usage_carbon_emissions_queries

dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryOutputReference <a name="DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_metering_computation_usage_carbon_emissions_queries

dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryOutputReference.property.compartmentDepth">compartment_depth</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryOutputReference.property.dateRangeName">date_range_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryOutputReference.property.groupBy">group_by</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryOutputReference.property.groupByTag">group_by_tag</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTagList">DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTagList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryOutputReference.property.isAggregateByTime">is_aggregate_by_time</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryOutputReference.property.timeUsageEnded">time_usage_ended</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryOutputReference.property.timeUsageStarted">time_usage_started</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryOutputReference.property.usageCarbonEmissionsQueryFilter">usage_carbon_emissions_query_filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQuery">DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQuery</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_depth`<sup>Required</sup> <a name="compartment_depth" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryOutputReference.property.compartmentDepth"></a>

```python
compartment_depth: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `date_range_name`<sup>Required</sup> <a name="date_range_name" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryOutputReference.property.dateRangeName"></a>

```python
date_range_name: str
```

- *Type:* str

---

##### `group_by`<sup>Required</sup> <a name="group_by" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryOutputReference.property.groupBy"></a>

```python
group_by: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `group_by_tag`<sup>Required</sup> <a name="group_by_tag" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryOutputReference.property.groupByTag"></a>

```python
group_by_tag: DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTagList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTagList">DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryGroupByTagList</a>

---

##### `is_aggregate_by_time`<sup>Required</sup> <a name="is_aggregate_by_time" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryOutputReference.property.isAggregateByTime"></a>

```python
is_aggregate_by_time: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `time_usage_ended`<sup>Required</sup> <a name="time_usage_ended" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryOutputReference.property.timeUsageEnded"></a>

```python
time_usage_ended: str
```

- *Type:* str

---

##### `time_usage_started`<sup>Required</sup> <a name="time_usage_started" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryOutputReference.property.timeUsageStarted"></a>

```python
time_usage_started: str
```

- *Type:* str

---

##### `usage_carbon_emissions_query_filter`<sup>Required</sup> <a name="usage_carbon_emissions_query_filter" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryOutputReference.property.usageCarbonEmissionsQueryFilter"></a>

```python
usage_carbon_emissions_query_filter: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQueryOutputReference.property.internalValue"></a>

```python
internal_value: DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQuery
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQuery">DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsQueryDefinitionReportQuery</a>

---


### DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionList <a name="DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionList" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_metering_computation_usage_carbon_emissions_queries

dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionOutputReference <a name="DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_metering_computation_usage_carbon_emissions_queries

dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsList">DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollection">DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionOutputReference.property.items"></a>

```python
items: DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsList">DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMeteringComputationUsageCarbonEmissionsQueries.DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollection">DataOciMeteringComputationUsageCarbonEmissionsQueriesUsageCarbonEmissionsQueryCollection</a>

---



