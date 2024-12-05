# `dataOciOnesubscriptionComputedUsages` Submodule <a name="`dataOciOnesubscriptionComputedUsages` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOnesubscriptionComputedUsages <a name="DataOciOnesubscriptionComputedUsages" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_computed_usages oci_onesubscription_computed_usages}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_computed_usages

dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages(
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
  subscription_id: str,
  time_from: str,
  time_to: str,
  computed_product: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciOnesubscriptionComputedUsagesFilter]] = None,
  id: str = None,
  parent_product: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_computed_usages#compartment_id DataOciOnesubscriptionComputedUsages#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.Initializer.parameter.subscriptionId">subscription_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_computed_usages#subscription_id DataOciOnesubscriptionComputedUsages#subscription_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.Initializer.parameter.timeFrom">time_from</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_computed_usages#time_from DataOciOnesubscriptionComputedUsages#time_from}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.Initializer.parameter.timeTo">time_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_computed_usages#time_to DataOciOnesubscriptionComputedUsages#time_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.Initializer.parameter.computedProduct">computed_product</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_computed_usages#computed_product DataOciOnesubscriptionComputedUsages#computed_product}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilter">DataOciOnesubscriptionComputedUsagesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_computed_usages#id DataOciOnesubscriptionComputedUsages#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.Initializer.parameter.parentProduct">parent_product</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_computed_usages#parent_product DataOciOnesubscriptionComputedUsages#parent_product}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_computed_usages#compartment_id DataOciOnesubscriptionComputedUsages#compartment_id}.

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.Initializer.parameter.subscriptionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_computed_usages#subscription_id DataOciOnesubscriptionComputedUsages#subscription_id}.

---

##### `time_from`<sup>Required</sup> <a name="time_from" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.Initializer.parameter.timeFrom"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_computed_usages#time_from DataOciOnesubscriptionComputedUsages#time_from}.

---

##### `time_to`<sup>Required</sup> <a name="time_to" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.Initializer.parameter.timeTo"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_computed_usages#time_to DataOciOnesubscriptionComputedUsages#time_to}.

---

##### `computed_product`<sup>Optional</sup> <a name="computed_product" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.Initializer.parameter.computedProduct"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_computed_usages#computed_product DataOciOnesubscriptionComputedUsages#computed_product}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilter">DataOciOnesubscriptionComputedUsagesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_computed_usages#filter DataOciOnesubscriptionComputedUsages#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_computed_usages#id DataOciOnesubscriptionComputedUsages#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parent_product`<sup>Optional</sup> <a name="parent_product" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.Initializer.parameter.parentProduct"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_computed_usages#parent_product DataOciOnesubscriptionComputedUsages#parent_product}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.resetComputedProduct">reset_computed_product</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.resetParentProduct">reset_parent_product</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciOnesubscriptionComputedUsagesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilter">DataOciOnesubscriptionComputedUsagesFilter</a>]]

---

##### `reset_computed_product` <a name="reset_computed_product" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.resetComputedProduct"></a>

```python
def reset_computed_product() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_parent_product` <a name="reset_parent_product" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.resetParentProduct"></a>

```python
def reset_parent_product() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciOnesubscriptionComputedUsages resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_computed_usages

dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_computed_usages

dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_computed_usages

dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_computed_usages

dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciOnesubscriptionComputedUsages resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciOnesubscriptionComputedUsages to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciOnesubscriptionComputedUsages that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_computed_usages#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOnesubscriptionComputedUsages to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.computedUsages">computed_usages</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesList">DataOciOnesubscriptionComputedUsagesComputedUsagesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterList">DataOciOnesubscriptionComputedUsagesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.computedProductInput">computed_product_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilter">DataOciOnesubscriptionComputedUsagesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.parentProductInput">parent_product_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.subscriptionIdInput">subscription_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.timeFromInput">time_from_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.timeToInput">time_to_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.computedProduct">computed_product</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.parentProduct">parent_product</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.subscriptionId">subscription_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.timeFrom">time_from</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.timeTo">time_to</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `computed_usages`<sup>Required</sup> <a name="computed_usages" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.computedUsages"></a>

```python
computed_usages: DataOciOnesubscriptionComputedUsagesComputedUsagesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesList">DataOciOnesubscriptionComputedUsagesComputedUsagesList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.filter"></a>

```python
filter: DataOciOnesubscriptionComputedUsagesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterList">DataOciOnesubscriptionComputedUsagesFilterList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `computed_product_input`<sup>Optional</sup> <a name="computed_product_input" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.computedProductInput"></a>

```python
computed_product_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciOnesubscriptionComputedUsagesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilter">DataOciOnesubscriptionComputedUsagesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `parent_product_input`<sup>Optional</sup> <a name="parent_product_input" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.parentProductInput"></a>

```python
parent_product_input: str
```

- *Type:* str

---

##### `subscription_id_input`<sup>Optional</sup> <a name="subscription_id_input" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.subscriptionIdInput"></a>

```python
subscription_id_input: str
```

- *Type:* str

---

##### `time_from_input`<sup>Optional</sup> <a name="time_from_input" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.timeFromInput"></a>

```python
time_from_input: str
```

- *Type:* str

---

##### `time_to_input`<sup>Optional</sup> <a name="time_to_input" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.timeToInput"></a>

```python
time_to_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `computed_product`<sup>Required</sup> <a name="computed_product" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.computedProduct"></a>

```python
computed_product: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `parent_product`<sup>Required</sup> <a name="parent_product" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.parentProduct"></a>

```python
parent_product: str
```

- *Type:* str

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

---

##### `time_from`<sup>Required</sup> <a name="time_from" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.timeFrom"></a>

```python
time_from: str
```

- *Type:* str

---

##### `time_to`<sup>Required</sup> <a name="time_to" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.timeTo"></a>

```python
time_to: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsages.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOnesubscriptionComputedUsagesComputedUsages <a name="DataOciOnesubscriptionComputedUsagesComputedUsages" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsages"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsages.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_computed_usages

dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsages()
```


### DataOciOnesubscriptionComputedUsagesComputedUsagesParentProduct <a name="DataOciOnesubscriptionComputedUsagesComputedUsagesParentProduct" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProduct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProduct.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_computed_usages

dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProduct()
```


### DataOciOnesubscriptionComputedUsagesComputedUsagesProduct <a name="DataOciOnesubscriptionComputedUsagesComputedUsagesProduct" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProduct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProduct.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_computed_usages

dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProduct()
```


### DataOciOnesubscriptionComputedUsagesConfig <a name="DataOciOnesubscriptionComputedUsagesConfig" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_computed_usages

dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  subscription_id: str,
  time_from: str,
  time_to: str,
  computed_product: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciOnesubscriptionComputedUsagesFilter]] = None,
  id: str = None,
  parent_product: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_computed_usages#compartment_id DataOciOnesubscriptionComputedUsages#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesConfig.property.subscriptionId">subscription_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_computed_usages#subscription_id DataOciOnesubscriptionComputedUsages#subscription_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesConfig.property.timeFrom">time_from</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_computed_usages#time_from DataOciOnesubscriptionComputedUsages#time_from}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesConfig.property.timeTo">time_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_computed_usages#time_to DataOciOnesubscriptionComputedUsages#time_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesConfig.property.computedProduct">computed_product</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_computed_usages#computed_product DataOciOnesubscriptionComputedUsages#computed_product}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilter">DataOciOnesubscriptionComputedUsagesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_computed_usages#id DataOciOnesubscriptionComputedUsages#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesConfig.property.parentProduct">parent_product</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_computed_usages#parent_product DataOciOnesubscriptionComputedUsages#parent_product}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_computed_usages#compartment_id DataOciOnesubscriptionComputedUsages#compartment_id}.

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesConfig.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_computed_usages#subscription_id DataOciOnesubscriptionComputedUsages#subscription_id}.

---

##### `time_from`<sup>Required</sup> <a name="time_from" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesConfig.property.timeFrom"></a>

```python
time_from: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_computed_usages#time_from DataOciOnesubscriptionComputedUsages#time_from}.

---

##### `time_to`<sup>Required</sup> <a name="time_to" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesConfig.property.timeTo"></a>

```python
time_to: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_computed_usages#time_to DataOciOnesubscriptionComputedUsages#time_to}.

---

##### `computed_product`<sup>Optional</sup> <a name="computed_product" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesConfig.property.computedProduct"></a>

```python
computed_product: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_computed_usages#computed_product DataOciOnesubscriptionComputedUsages#computed_product}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciOnesubscriptionComputedUsagesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilter">DataOciOnesubscriptionComputedUsagesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_computed_usages#filter DataOciOnesubscriptionComputedUsages#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_computed_usages#id DataOciOnesubscriptionComputedUsages#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parent_product`<sup>Optional</sup> <a name="parent_product" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesConfig.property.parentProduct"></a>

```python
parent_product: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_computed_usages#parent_product DataOciOnesubscriptionComputedUsages#parent_product}.

---

### DataOciOnesubscriptionComputedUsagesFilter <a name="DataOciOnesubscriptionComputedUsagesFilter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_computed_usages

dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_computed_usages#name DataOciOnesubscriptionComputedUsages#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_computed_usages#values DataOciOnesubscriptionComputedUsages#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_computed_usages#regex DataOciOnesubscriptionComputedUsages#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_computed_usages#name DataOciOnesubscriptionComputedUsages#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_computed_usages#values DataOciOnesubscriptionComputedUsages#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_computed_usages#regex DataOciOnesubscriptionComputedUsages#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciOnesubscriptionComputedUsagesComputedUsagesList <a name="DataOciOnesubscriptionComputedUsagesComputedUsagesList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_computed_usages

dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference <a name="DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_computed_usages

dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.commitmentServiceId">commitment_service_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.computedUsageId">computed_usage_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.computeSource">compute_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.cost">cost</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.costRounded">cost_rounded</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.currencyCode">currency_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.dataCenter">data_center</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.isInvoiced">is_invoiced</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.mqsMessageId">mqs_message_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.netUnitPrice">net_unit_price</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.originalUsageNumber">original_usage_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.parentProduct">parent_product</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductList">DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.parentSubscribedServiceId">parent_subscribed_service_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.planNumber">plan_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.product">product</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductList">DataOciOnesubscriptionComputedUsagesComputedUsagesProductList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.quantity">quantity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.rateCardId">rate_card_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.rateCardTierdId">rate_card_tierd_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.timeMeteredOn">time_metered_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.timeOfArrival">time_of_arrival</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.unitOfMeasure">unit_of_measure</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.usageNumber">usage_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsages">DataOciOnesubscriptionComputedUsagesComputedUsages</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `commitment_service_id`<sup>Required</sup> <a name="commitment_service_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.commitmentServiceId"></a>

```python
commitment_service_id: str
```

- *Type:* str

---

##### `computed_usage_id`<sup>Required</sup> <a name="computed_usage_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.computedUsageId"></a>

```python
computed_usage_id: str
```

- *Type:* str

---

##### `compute_source`<sup>Required</sup> <a name="compute_source" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.computeSource"></a>

```python
compute_source: str
```

- *Type:* str

---

##### `cost`<sup>Required</sup> <a name="cost" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.cost"></a>

```python
cost: str
```

- *Type:* str

---

##### `cost_rounded`<sup>Required</sup> <a name="cost_rounded" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.costRounded"></a>

```python
cost_rounded: str
```

- *Type:* str

---

##### `currency_code`<sup>Required</sup> <a name="currency_code" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.currencyCode"></a>

```python
currency_code: str
```

- *Type:* str

---

##### `data_center`<sup>Required</sup> <a name="data_center" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.dataCenter"></a>

```python
data_center: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_invoiced`<sup>Required</sup> <a name="is_invoiced" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.isInvoiced"></a>

```python
is_invoiced: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `mqs_message_id`<sup>Required</sup> <a name="mqs_message_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.mqsMessageId"></a>

```python
mqs_message_id: str
```

- *Type:* str

---

##### `net_unit_price`<sup>Required</sup> <a name="net_unit_price" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.netUnitPrice"></a>

```python
net_unit_price: str
```

- *Type:* str

---

##### `original_usage_number`<sup>Required</sup> <a name="original_usage_number" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.originalUsageNumber"></a>

```python
original_usage_number: str
```

- *Type:* str

---

##### `parent_product`<sup>Required</sup> <a name="parent_product" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.parentProduct"></a>

```python
parent_product: DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductList">DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductList</a>

---

##### `parent_subscribed_service_id`<sup>Required</sup> <a name="parent_subscribed_service_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.parentSubscribedServiceId"></a>

```python
parent_subscribed_service_id: str
```

- *Type:* str

---

##### `plan_number`<sup>Required</sup> <a name="plan_number" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.planNumber"></a>

```python
plan_number: str
```

- *Type:* str

---

##### `product`<sup>Required</sup> <a name="product" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.product"></a>

```python
product: DataOciOnesubscriptionComputedUsagesComputedUsagesProductList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductList">DataOciOnesubscriptionComputedUsagesComputedUsagesProductList</a>

---

##### `quantity`<sup>Required</sup> <a name="quantity" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.quantity"></a>

```python
quantity: str
```

- *Type:* str

---

##### `rate_card_id`<sup>Required</sup> <a name="rate_card_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.rateCardId"></a>

```python
rate_card_id: str
```

- *Type:* str

---

##### `rate_card_tierd_id`<sup>Required</sup> <a name="rate_card_tierd_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.rateCardTierdId"></a>

```python
rate_card_tierd_id: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_metered_on`<sup>Required</sup> <a name="time_metered_on" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.timeMeteredOn"></a>

```python
time_metered_on: str
```

- *Type:* str

---

##### `time_of_arrival`<sup>Required</sup> <a name="time_of_arrival" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.timeOfArrival"></a>

```python
time_of_arrival: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `unit_of_measure`<sup>Required</sup> <a name="unit_of_measure" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.unitOfMeasure"></a>

```python
unit_of_measure: str
```

- *Type:* str

---

##### `usage_number`<sup>Required</sup> <a name="usage_number" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.usageNumber"></a>

```python
usage_number: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOnesubscriptionComputedUsagesComputedUsages
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsages">DataOciOnesubscriptionComputedUsagesComputedUsages</a>

---


### DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductList <a name="DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_computed_usages

dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference <a name="DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_computed_usages

dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.property.billingCategory">billing_category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.property.partNumber">part_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.property.productCategory">product_category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.property.provisioningGroup">provisioning_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.property.ucmRateCardPartType">ucm_rate_card_part_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.property.unitOfMeasure">unit_of_measure</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProduct">DataOciOnesubscriptionComputedUsagesComputedUsagesParentProduct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `billing_category`<sup>Required</sup> <a name="billing_category" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.property.billingCategory"></a>

```python
billing_category: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `part_number`<sup>Required</sup> <a name="part_number" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.property.partNumber"></a>

```python
part_number: str
```

- *Type:* str

---

##### `product_category`<sup>Required</sup> <a name="product_category" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.property.productCategory"></a>

```python
product_category: str
```

- *Type:* str

---

##### `provisioning_group`<sup>Required</sup> <a name="provisioning_group" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.property.provisioningGroup"></a>

```python
provisioning_group: str
```

- *Type:* str

---

##### `ucm_rate_card_part_type`<sup>Required</sup> <a name="ucm_rate_card_part_type" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.property.ucmRateCardPartType"></a>

```python
ucm_rate_card_part_type: str
```

- *Type:* str

---

##### `unit_of_measure`<sup>Required</sup> <a name="unit_of_measure" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.property.unitOfMeasure"></a>

```python
unit_of_measure: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProductOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOnesubscriptionComputedUsagesComputedUsagesParentProduct
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesParentProduct">DataOciOnesubscriptionComputedUsagesComputedUsagesParentProduct</a>

---


### DataOciOnesubscriptionComputedUsagesComputedUsagesProductList <a name="DataOciOnesubscriptionComputedUsagesComputedUsagesProductList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_computed_usages

dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference <a name="DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_computed_usages

dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.property.billingCategory">billing_category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.property.partNumber">part_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.property.productCategory">product_category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.property.provisioningGroup">provisioning_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.property.ucmRateCardPartType">ucm_rate_card_part_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.property.unitOfMeasure">unit_of_measure</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProduct">DataOciOnesubscriptionComputedUsagesComputedUsagesProduct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `billing_category`<sup>Required</sup> <a name="billing_category" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.property.billingCategory"></a>

```python
billing_category: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `part_number`<sup>Required</sup> <a name="part_number" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.property.partNumber"></a>

```python
part_number: str
```

- *Type:* str

---

##### `product_category`<sup>Required</sup> <a name="product_category" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.property.productCategory"></a>

```python
product_category: str
```

- *Type:* str

---

##### `provisioning_group`<sup>Required</sup> <a name="provisioning_group" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.property.provisioningGroup"></a>

```python
provisioning_group: str
```

- *Type:* str

---

##### `ucm_rate_card_part_type`<sup>Required</sup> <a name="ucm_rate_card_part_type" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.property.ucmRateCardPartType"></a>

```python
ucm_rate_card_part_type: str
```

- *Type:* str

---

##### `unit_of_measure`<sup>Required</sup> <a name="unit_of_measure" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.property.unitOfMeasure"></a>

```python
unit_of_measure: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProductOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOnesubscriptionComputedUsagesComputedUsagesProduct
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesComputedUsagesProduct">DataOciOnesubscriptionComputedUsagesComputedUsagesProduct</a>

---


### DataOciOnesubscriptionComputedUsagesFilterList <a name="DataOciOnesubscriptionComputedUsagesFilterList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_computed_usages

dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOnesubscriptionComputedUsagesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilter">DataOciOnesubscriptionComputedUsagesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciOnesubscriptionComputedUsagesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilter">DataOciOnesubscriptionComputedUsagesFilter</a>]]

---


### DataOciOnesubscriptionComputedUsagesFilterOutputReference <a name="DataOciOnesubscriptionComputedUsagesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_computed_usages

dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilter">DataOciOnesubscriptionComputedUsagesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciOnesubscriptionComputedUsagesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionComputedUsages.DataOciOnesubscriptionComputedUsagesFilter">DataOciOnesubscriptionComputedUsagesFilter</a>]

---



