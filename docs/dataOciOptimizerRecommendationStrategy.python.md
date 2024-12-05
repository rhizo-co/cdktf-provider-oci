# `dataOciOptimizerRecommendationStrategy` Submodule <a name="`dataOciOptimizerRecommendationStrategy` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOptimizerRecommendationStrategy <a name="DataOciOptimizerRecommendationStrategy" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendation_strategy oci_optimizer_recommendation_strategy}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_optimizer_recommendation_strategy

dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy(
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
  id: str = None,
  name: str = None,
  recommendation_name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendation_strategy#compartment_id DataOciOptimizerRecommendationStrategy#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.Initializer.parameter.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendation_strategy#compartment_id_in_subtree DataOciOptimizerRecommendationStrategy#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendation_strategy#id DataOciOptimizerRecommendationStrategy#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendation_strategy#name DataOciOptimizerRecommendationStrategy#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.Initializer.parameter.recommendationName">recommendation_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendation_strategy#recommendation_name DataOciOptimizerRecommendationStrategy#recommendation_name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendation_strategy#compartment_id DataOciOptimizerRecommendationStrategy#compartment_id}.

---

##### `compartment_id_in_subtree`<sup>Required</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.Initializer.parameter.compartmentIdInSubtree"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendation_strategy#compartment_id_in_subtree DataOciOptimizerRecommendationStrategy#compartment_id_in_subtree}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendation_strategy#id DataOciOptimizerRecommendationStrategy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendation_strategy#name DataOciOptimizerRecommendationStrategy#name}.

---

##### `recommendation_name`<sup>Optional</sup> <a name="recommendation_name" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.Initializer.parameter.recommendationName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendation_strategy#recommendation_name DataOciOptimizerRecommendationStrategy#recommendation_name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.resetRecommendationName">reset_recommendation_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_recommendation_name` <a name="reset_recommendation_name" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.resetRecommendationName"></a>

```python
def reset_recommendation_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciOptimizerRecommendationStrategy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_optimizer_recommendation_strategy

dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_optimizer_recommendation_strategy

dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_optimizer_recommendation_strategy

dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_optimizer_recommendation_strategy

dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciOptimizerRecommendationStrategy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciOptimizerRecommendationStrategy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciOptimizerRecommendationStrategy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendation_strategy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOptimizerRecommendationStrategy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsList">DataOciOptimizerRecommendationStrategyItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.compartmentIdInSubtreeInput">compartment_id_in_subtree_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.recommendationNameInput">recommendation_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.recommendationName">recommendation_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.items"></a>

```python
items: DataOciOptimizerRecommendationStrategyItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsList">DataOciOptimizerRecommendationStrategyItemsList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `compartment_id_in_subtree_input`<sup>Optional</sup> <a name="compartment_id_in_subtree_input" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.compartmentIdInSubtreeInput"></a>

```python
compartment_id_in_subtree_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `recommendation_name_input`<sup>Optional</sup> <a name="recommendation_name_input" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.recommendationNameInput"></a>

```python
recommendation_name_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `compartment_id_in_subtree`<sup>Required</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.compartmentIdInSubtree"></a>

```python
compartment_id_in_subtree: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `recommendation_name`<sup>Required</sup> <a name="recommendation_name" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.recommendationName"></a>

```python
recommendation_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOptimizerRecommendationStrategyConfig <a name="DataOciOptimizerRecommendationStrategyConfig" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_optimizer_recommendation_strategy

dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  compartment_id_in_subtree: typing.Union[bool, IResolvable],
  id: str = None,
  name: str = None,
  recommendation_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendation_strategy#compartment_id DataOciOptimizerRecommendationStrategy#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyConfig.property.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendation_strategy#compartment_id_in_subtree DataOciOptimizerRecommendationStrategy#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendation_strategy#id DataOciOptimizerRecommendationStrategy#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendation_strategy#name DataOciOptimizerRecommendationStrategy#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyConfig.property.recommendationName">recommendation_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendation_strategy#recommendation_name DataOciOptimizerRecommendationStrategy#recommendation_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendation_strategy#compartment_id DataOciOptimizerRecommendationStrategy#compartment_id}.

---

##### `compartment_id_in_subtree`<sup>Required</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyConfig.property.compartmentIdInSubtree"></a>

```python
compartment_id_in_subtree: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendation_strategy#compartment_id_in_subtree DataOciOptimizerRecommendationStrategy#compartment_id_in_subtree}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendation_strategy#id DataOciOptimizerRecommendationStrategy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendation_strategy#name DataOciOptimizerRecommendationStrategy#name}.

---

##### `recommendation_name`<sup>Optional</sup> <a name="recommendation_name" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyConfig.property.recommendationName"></a>

```python
recommendation_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendation_strategy#recommendation_name DataOciOptimizerRecommendationStrategy#recommendation_name}.

---

### DataOciOptimizerRecommendationStrategyItems <a name="DataOciOptimizerRecommendationStrategyItems" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_optimizer_recommendation_strategy

dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItems()
```


### DataOciOptimizerRecommendationStrategyItemsStrategies <a name="DataOciOptimizerRecommendationStrategyItemsStrategies" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategies"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategies.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_optimizer_recommendation_strategy

dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategies()
```


### DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinition <a name="DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinition" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinition"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinition.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_optimizer_recommendation_strategy

dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinition()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOptimizerRecommendationStrategyItemsList <a name="DataOciOptimizerRecommendationStrategyItemsList" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_optimizer_recommendation_strategy

dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOptimizerRecommendationStrategyItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOptimizerRecommendationStrategyItemsOutputReference <a name="DataOciOptimizerRecommendationStrategyItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_optimizer_recommendation_strategy

dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.property.strategies">strategies</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesList">DataOciOptimizerRecommendationStrategyItemsStrategiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItems">DataOciOptimizerRecommendationStrategyItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `strategies`<sup>Required</sup> <a name="strategies" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.property.strategies"></a>

```python
strategies: DataOciOptimizerRecommendationStrategyItemsStrategiesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesList">DataOciOptimizerRecommendationStrategyItemsStrategiesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOptimizerRecommendationStrategyItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItems">DataOciOptimizerRecommendationStrategyItems</a>

---


### DataOciOptimizerRecommendationStrategyItemsStrategiesList <a name="DataOciOptimizerRecommendationStrategyItemsStrategiesList" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_optimizer_recommendation_strategy

dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference <a name="DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_optimizer_recommendation_strategy

dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.property.isDefault">is_default</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.property.parametersDefinition">parameters_definition</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionList">DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.property.strategyName">strategy_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategies">DataOciOptimizerRecommendationStrategyItemsStrategies</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_default`<sup>Required</sup> <a name="is_default" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.property.isDefault"></a>

```python
is_default: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `parameters_definition`<sup>Required</sup> <a name="parameters_definition" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.property.parametersDefinition"></a>

```python
parameters_definition: DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionList">DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionList</a>

---

##### `strategy_name`<sup>Required</sup> <a name="strategy_name" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.property.strategyName"></a>

```python
strategy_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOptimizerRecommendationStrategyItemsStrategies
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategies">DataOciOptimizerRecommendationStrategyItemsStrategies</a>

---


### DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionList <a name="DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionList" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_optimizer_recommendation_strategy

dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference <a name="DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_optimizer_recommendation_strategy

dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.property.defaultValue">default_value</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.property.isRequired">is_required</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.property.possibleValues">possible_values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinition">DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_value`<sup>Required</sup> <a name="default_value" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.property.defaultValue"></a>

```python
default_value: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `is_required`<sup>Required</sup> <a name="is_required" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.property.isRequired"></a>

```python
is_required: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `possible_values`<sup>Required</sup> <a name="possible_values" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.property.possibleValues"></a>

```python
possible_values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinition
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinition">DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinition</a>

---



