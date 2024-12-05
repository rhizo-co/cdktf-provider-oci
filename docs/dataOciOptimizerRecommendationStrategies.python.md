# `dataOciOptimizerRecommendationStrategies` Submodule <a name="`dataOciOptimizerRecommendationStrategies` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOptimizerRecommendationStrategies <a name="DataOciOptimizerRecommendationStrategies" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendation_strategies oci_optimizer_recommendation_strategies}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_optimizer_recommendation_strategies

dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies(
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
  compartment_id_in_subtree: typing.Union[bool, IResolvable],
  filter: typing.Union[IResolvable, typing.List[DataOciOptimizerRecommendationStrategiesFilter]] = None,
  id: str = None,
  name: str = None,
  recommendation_name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendation_strategies#compartment_id DataOciOptimizerRecommendationStrategies#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.Initializer.parameter.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendation_strategies#compartment_id_in_subtree DataOciOptimizerRecommendationStrategies#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilter">DataOciOptimizerRecommendationStrategiesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendation_strategies#id DataOciOptimizerRecommendationStrategies#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendation_strategies#name DataOciOptimizerRecommendationStrategies#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.Initializer.parameter.recommendationName">recommendation_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendation_strategies#recommendation_name DataOciOptimizerRecommendationStrategies#recommendation_name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendation_strategies#compartment_id DataOciOptimizerRecommendationStrategies#compartment_id}.

---

##### `compartment_id_in_subtree`<sup>Required</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.Initializer.parameter.compartmentIdInSubtree"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendation_strategies#compartment_id_in_subtree DataOciOptimizerRecommendationStrategies#compartment_id_in_subtree}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilter">DataOciOptimizerRecommendationStrategiesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendation_strategies#filter DataOciOptimizerRecommendationStrategies#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendation_strategies#id DataOciOptimizerRecommendationStrategies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendation_strategies#name DataOciOptimizerRecommendationStrategies#name}.

---

##### `recommendation_name`<sup>Optional</sup> <a name="recommendation_name" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.Initializer.parameter.recommendationName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendation_strategies#recommendation_name DataOciOptimizerRecommendationStrategies#recommendation_name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.resetRecommendationName">reset_recommendation_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciOptimizerRecommendationStrategiesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilter">DataOciOptimizerRecommendationStrategiesFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_recommendation_name` <a name="reset_recommendation_name" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.resetRecommendationName"></a>

```python
def reset_recommendation_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciOptimizerRecommendationStrategies resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_optimizer_recommendation_strategies

dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_optimizer_recommendation_strategies

dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_optimizer_recommendation_strategies

dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_optimizer_recommendation_strategies

dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciOptimizerRecommendationStrategies resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciOptimizerRecommendationStrategies to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciOptimizerRecommendationStrategies that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendation_strategies#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOptimizerRecommendationStrategies to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterList">DataOciOptimizerRecommendationStrategiesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.property.recommendationStrategyCollection">recommendation_strategy_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionList">DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.property.compartmentIdInSubtreeInput">compartment_id_in_subtree_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilter">DataOciOptimizerRecommendationStrategiesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.property.recommendationNameInput">recommendation_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.property.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.property.recommendationName">recommendation_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.property.filter"></a>

```python
filter: DataOciOptimizerRecommendationStrategiesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterList">DataOciOptimizerRecommendationStrategiesFilterList</a>

---

##### `recommendation_strategy_collection`<sup>Required</sup> <a name="recommendation_strategy_collection" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.property.recommendationStrategyCollection"></a>

```python
recommendation_strategy_collection: DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionList">DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `compartment_id_in_subtree_input`<sup>Optional</sup> <a name="compartment_id_in_subtree_input" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.property.compartmentIdInSubtreeInput"></a>

```python
compartment_id_in_subtree_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciOptimizerRecommendationStrategiesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilter">DataOciOptimizerRecommendationStrategiesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `recommendation_name_input`<sup>Optional</sup> <a name="recommendation_name_input" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.property.recommendationNameInput"></a>

```python
recommendation_name_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `compartment_id_in_subtree`<sup>Required</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.property.compartmentIdInSubtree"></a>

```python
compartment_id_in_subtree: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `recommendation_name`<sup>Required</sup> <a name="recommendation_name" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.property.recommendationName"></a>

```python
recommendation_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategies.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOptimizerRecommendationStrategiesConfig <a name="DataOciOptimizerRecommendationStrategiesConfig" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_optimizer_recommendation_strategies

dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  compartment_id_in_subtree: typing.Union[bool, IResolvable],
  filter: typing.Union[IResolvable, typing.List[DataOciOptimizerRecommendationStrategiesFilter]] = None,
  id: str = None,
  name: str = None,
  recommendation_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendation_strategies#compartment_id DataOciOptimizerRecommendationStrategies#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesConfig.property.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendation_strategies#compartment_id_in_subtree DataOciOptimizerRecommendationStrategies#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilter">DataOciOptimizerRecommendationStrategiesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendation_strategies#id DataOciOptimizerRecommendationStrategies#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendation_strategies#name DataOciOptimizerRecommendationStrategies#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesConfig.property.recommendationName">recommendation_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendation_strategies#recommendation_name DataOciOptimizerRecommendationStrategies#recommendation_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendation_strategies#compartment_id DataOciOptimizerRecommendationStrategies#compartment_id}.

---

##### `compartment_id_in_subtree`<sup>Required</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesConfig.property.compartmentIdInSubtree"></a>

```python
compartment_id_in_subtree: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendation_strategies#compartment_id_in_subtree DataOciOptimizerRecommendationStrategies#compartment_id_in_subtree}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciOptimizerRecommendationStrategiesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilter">DataOciOptimizerRecommendationStrategiesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendation_strategies#filter DataOciOptimizerRecommendationStrategies#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendation_strategies#id DataOciOptimizerRecommendationStrategies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendation_strategies#name DataOciOptimizerRecommendationStrategies#name}.

---

##### `recommendation_name`<sup>Optional</sup> <a name="recommendation_name" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesConfig.property.recommendationName"></a>

```python
recommendation_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendation_strategies#recommendation_name DataOciOptimizerRecommendationStrategies#recommendation_name}.

---

### DataOciOptimizerRecommendationStrategiesFilter <a name="DataOciOptimizerRecommendationStrategiesFilter" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_optimizer_recommendation_strategies

dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendation_strategies#name DataOciOptimizerRecommendationStrategies#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendation_strategies#values DataOciOptimizerRecommendationStrategies#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendation_strategies#regex DataOciOptimizerRecommendationStrategies#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendation_strategies#name DataOciOptimizerRecommendationStrategies#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendation_strategies#values DataOciOptimizerRecommendationStrategies#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendation_strategies#regex DataOciOptimizerRecommendationStrategies#regex}.

---

### DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollection <a name="DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollection" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_optimizer_recommendation_strategies

dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollection()
```


### DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItems <a name="DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_optimizer_recommendation_strategies

dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItems()
```


### DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategies <a name="DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategies" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategies"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategies.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_optimizer_recommendation_strategies

dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategies()
```


### DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinition <a name="DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinition" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinition"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinition.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_optimizer_recommendation_strategies

dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinition()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOptimizerRecommendationStrategiesFilterList <a name="DataOciOptimizerRecommendationStrategiesFilterList" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_optimizer_recommendation_strategies

dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOptimizerRecommendationStrategiesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilter">DataOciOptimizerRecommendationStrategiesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciOptimizerRecommendationStrategiesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilter">DataOciOptimizerRecommendationStrategiesFilter</a>]]

---


### DataOciOptimizerRecommendationStrategiesFilterOutputReference <a name="DataOciOptimizerRecommendationStrategiesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_optimizer_recommendation_strategies

dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilter">DataOciOptimizerRecommendationStrategiesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciOptimizerRecommendationStrategiesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesFilter">DataOciOptimizerRecommendationStrategiesFilter</a>]

---


### DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsList <a name="DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_optimizer_recommendation_strategies

dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference <a name="DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_optimizer_recommendation_strategies

dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.property.strategies">strategies</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesList">DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItems">DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `strategies`<sup>Required</sup> <a name="strategies" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.property.strategies"></a>

```python
strategies: DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesList">DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItems">DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItems</a>

---


### DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesList <a name="DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesList" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_optimizer_recommendation_strategies

dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference <a name="DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_optimizer_recommendation_strategies

dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.property.isDefault">is_default</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.property.parametersDefinition">parameters_definition</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionList">DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.property.strategyName">strategy_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategies">DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategies</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_default`<sup>Required</sup> <a name="is_default" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.property.isDefault"></a>

```python
is_default: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `parameters_definition`<sup>Required</sup> <a name="parameters_definition" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.property.parametersDefinition"></a>

```python
parameters_definition: DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionList">DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionList</a>

---

##### `strategy_name`<sup>Required</sup> <a name="strategy_name" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.property.strategyName"></a>

```python
strategy_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategies
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategies">DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategies</a>

---


### DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionList <a name="DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionList" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_optimizer_recommendation_strategies

dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference <a name="DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_optimizer_recommendation_strategies

dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.property.defaultValue">default_value</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.property.isRequired">is_required</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.property.possibleValues">possible_values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinition">DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_value`<sup>Required</sup> <a name="default_value" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.property.defaultValue"></a>

```python
default_value: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `is_required`<sup>Required</sup> <a name="is_required" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.property.isRequired"></a>

```python
is_required: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `possible_values`<sup>Required</sup> <a name="possible_values" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.property.possibleValues"></a>

```python
possible_values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinitionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinition
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinition">DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsStrategiesParametersDefinition</a>

---


### DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionList <a name="DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_optimizer_recommendation_strategies

dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference <a name="DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_optimizer_recommendation_strategies

dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsList">DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollection">DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.property.items"></a>

```python
items: DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsList">DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategies.DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollection">DataOciOptimizerRecommendationStrategiesRecommendationStrategyCollection</a>

---



